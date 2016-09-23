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
    console.log(job.timestamp, ' progress ', Math.floor((count / total) * 100))
    job.progress(Math.floor((count / total) * 100))
    count++

    if (count > total) {
      clearInterval(timer)
      done()
    }
  }, 100)
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
    const jInterval = setInterval(() => {
      jobQueue.add({
        total: Math.floor(Math.random() * (10 - 1 + 1) + 1)
      })
    }, 1000)

    socket.on('sampleClientEvent', function (data) {
      count++
      console.log('Handled sampleClientEvent', data)
      scServer.exchange.publish('sample', count)
    })

    const mInterval = setInterval(function () {
      messageQueue.on('completed', (job, result) => {
        // FIXME double send events
        socket.emit('job.done', {
          job: job.timestamp,
          data: result
        })
      })
    }, 1000)

    socket.on('disconnect', function () {
      console.log('disconnected')
      clearInterval(jInterval)
      clearInterval(mInterval)
    })
  })
}
