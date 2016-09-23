const Queue = require('bull')
const config = require('./config')
const app = require('./app')

// add jobs to jobQueue
// receive result from messageQueue

const messageQueue = Queue(
  'messages', config.get('redisPort'), config.get('redisHost'))
const jobQueue = Queue(
  'jobs', config.get('redisPort'), config.get('redisHost'))


jobQueue.process((job, done) => {
  let count = 0
  const total = job.data.total
  const timer = setInterval(() => {
    console.log(count)
    console.log(job.timestamp, ' progress ', Math.floor((count / total) * 100))
    job.progress(Math.floor((count / total) * 100))
    count++

    if (count > total) {
      clearInterval(timer)
      done()
    }
  }, 1000)
})

jobQueue.on('active', (job, jobPromise) => {
  console.log('started job ', job.timestamp)
  messageQueue.add({ job: job.timestamp, status: 'started' })
})

jobQueue.on('progress', (job, progress) => {
  messageQueue.add({ job: job.timestamp, progress: progress })
})

jobQueue.on('completed', (job, result) => {
  console.log('completed job ', job.timestamp)
  messageQueue.add({ job: job.timestamp, status: 'complete' })
})

jobQueue.on('failed', (job, err) => {
  console.error(`job ${job.timestamp} failed`, err.message)
  messageQueue.add({ job: job.timestamp, status: 'failed' })
})

messageQueue.process((msg, done) => {
  console.log('received message ', msg.data)
  done(null, msg.data)
})

module.exports.run = function (worker) {
  console.log('   >> Worker PID:', process.pid)

  const httpServer = worker.httpServer
  const scServer = worker.scServer

  httpServer.on('request', app)

  let count = 0

  // handle our incoming realtime connections and listen for events.
  scServer.on('connection', function (socket) {
    // Some sample logic to show how to handle client events,
    // replace this with your own logic
    //
    console.log('>> connection')

    const jInterval = setInterval(() => {
      jobQueue.add({
        // total: Math.floor(Math.random() * (10 - 1 + 1) + 1)
        total: 4
      })
    }, 1000)

    function emitJobStatus(socket, job, result) {
      console.log('emit job status')
      const message = {
        job: job.timestamp
      }

      if (result.progress) {
        message.progress = result.progress
      }

      if (result.status) {
        message.status = result.status
      }

      // FIXME out of order progress events
      socket.emit('job.message', message)
    }

    // socket.on('sampleClientEvent', function (data) {
    //   count++
    //   console.log('Handled sampleClientEvent', data)
    //   scServer.exchange.publish('sample', count)
    // })

    messageQueue.on('completed', (job, result) => {
      emitJobStatus(socket, job, result)
    })

    socket.on('disconnect', function () {
      console.log('disconnected')
      messageQueue.removeListener(emitJobStatus)
      clearInterval(jInterval)
    })
  })
}
