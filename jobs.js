const Queue = require('bull')
const config = require('./config')

// add job to queue
// receive result from messages

const queue = Queue(
  'messages', config.get('redisPort'), config.get('redisHost'))
const messages = Queue(
  'queue', config.get('redisPort'), config.get('redisHost'))

queue.process((job, done) => {
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

queue.on('active', (job, jobPromise) => {
  console.log('started job ', job.timestamp)
  messages.add({ job: job.timestamp, status: 'started' })
})

queue.on('progress', (job, progress) => {
  messages.add({ job: job.timestamp, progress: progress })
})

queue.on('completed', (job, result) => {
  console.log('completed job ', job.timestamp)
  messages.add({ job: job.timestamp, status: 'complete' })
})

queue.on('failed', (job, err) => {
  console.error(`job ${job.timestamp} failed`, err.message)
  messages.add({ job: job.timestamp, status: 'failed' })
})

// FIXME bull docs say use process to receive messages:
//       https://github.com/OptimalBits/bull#message-queue
//       setup pub/sub or middleware to this function
//       although, currently listening to 'completed' event isn't so bad...
messages.process((msg, done) => {
  console.log('received message ', msg.data)
  done(null, msg.data)
})

module.exports = {
  queue,
  messages
}
