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

    function emitJobMessage (job, message) {
      socket.emit('job.message', message)
    }

    // TODO
    //   * client requests job updates
    //   * listen for job messages with jobId
    //   * emit message if relevant
    jobs.messages.process((message, done) => {
      socket.emit('job.message', message.data)
      done(null, message.data)
    })
    // jobs.messages.on('completed', (job, message) => {
    //   console.log('socket completed')
    //   socket.emit('job.message', message)
    // })
    // jobs.process((message) => {
    //   console.log('socket', message)
    //   message.pid = process.pid
    //   socket.emit('job.message', message)
    // })

    socket.on('disconnect', function () {
      console.log('>> disconnected')
      // jobs.messages.removeListener('completed', emitJobMessage)
    })
  })
}
