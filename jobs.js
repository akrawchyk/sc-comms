const Queue = require('bull')
const config = require('./config')

// add job to queue
// receive result from messages

const queue = Queue(
  'messages', config.get('redisPort'), config.get('redisHost'))
const messages = Queue(
  'queue', config.get('redisPort'), config.get('redisHost'))

queue.process((job, done) => {
  // TODO get validated url from job data
  // purify the url
  // report progress

  let count = 0
  const total = job.data.total
  const timer = setInterval(() => {
    job.progress(Math.floor((count / total) * 100))
    count++

    if (count > total) {
      clearInterval(timer)
      done()
    }
  }, 1000)
})

queue.on('active', (job, jobPromise) => {
  console.log('started job ', job.jobId)
  messages.add({ job: job.jobId, status: 'started' })
})

queue.on('progress', (job, progress) => {
  console.log('job progress ', progress)
  messages.add({ job: job.jobId, progress: progress })
})

queue.on('completed', (job, result) => {
  console.log('completed job ', job.jobId)
  messages.add({ job: job.jobId, status: 'complete' })
})

queue.on('failed', (job, err) => {
  console.error(`job ${job.jobId} failed`, err.message)
  messages.add({ job: job.jobId, status: 'failed' })
})

// messages.on('completed', (job, result) => {
//   console.log('message', result)
// })

const processors = []

// FIXME setup pub/sub or middleware to this function for message handling
// messages.process((msg, done) => {
//   console.log('received message ', msg.data)
//   processors.map((p) => {
//     p(msg.data)
//   })
//
//   done(null, msg.data)
// })

module.exports = {
  queue,
  messages,
  process (callback) {
    processors.push(callback)
  }
}
