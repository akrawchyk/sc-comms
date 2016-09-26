const config = require('./config')
const app = require('./app')
const jobs = require('./jobs')

module.exports.run = function (worker) {
  console.log('   >> Worker PID:', process.pid)

  const httpServer = worker.httpServer
  const scServer = worker.scServer

  httpServer.on('request', app)

  // handle our incoming realtime connections and listen for events.
  scServer.on('connection', function (socket) {
    console.log('>> connection')

    function emitJobStatus (job, result) {
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

    jobs.messages.on('completed', emitJobStatus)

    socket.on('disconnect', function () {
      console.log('disconnected')
      jobs.messages.removeListener('completed', emitJobStatus)
    })
  })
}
