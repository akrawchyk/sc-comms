const os = require('os')
const path = require('path')
const SocketCluster = require('socketcluster').SocketCluster
const Queue = require('bull')
const config = require('./config')

// add jobs to jobQueue
// receive result from messageQueue

const messageQueue = Queue(
  'messages', config.get('redisPort'), config.get('redisHost'))
const jobQueue = Queue(
  'jobs', config.get('redisPort'), config.get('redisHost'))

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
  done()
})

const socketCluster = new SocketCluster({
  host: config.get('httpHost'),
  port: config.get('httpPort'),
  workers: os.cpus().length || 1,
  brokers: 1,
  appName: 'app',
  wsEngine: 'uws',
  workerController: path.join(__dirname, '/worker.js'),
  brokerController: path.join(__dirname, '/broker.js'),
  socketChannelLimit: config.get('socketChannelLimit'),
  rebootWorkerOnCrash: true
  // clusterAuthKey: process.env.SCC_AUTH_KEY || null,
})

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

// setInterval(() => {
//   jobQueue.add({
//     total: Math.floor(Math.random() * (10 - 1 + 1) + 1)
//   })
// }, 1000)
