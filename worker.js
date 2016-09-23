const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const routes = require('./routes/index')

module.exports.run = function (worker) {
  console.log('   >> Worker PID:', process.pid)

  const app = require('express')()

  // confiugure express
  app.set('x-powered-by', false)
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'pug')

  // setup routes
  app.use('/', routes)

  const httpServer = worker.httpServer
  const scServer = worker.scServer

  httpServer.on('request', app)

  let count = 0

  // handle our incoming realtime connections and listen for events.
  scServer.on('connection', function (socket) {
    // Some sample logic to show how to handle client events,
    // replace this with your own logic

    socket.on('sampleClientEvent', function (data) {
      count++
      console.log('Handled sampleClientEvent', data)
      scServer.exchange.publish('sample', count)
    })

    const interval = setInterval(function () {
      socket.emit('rand', {
        rand: Math.floor(Math.random() * 5)
      })
    }, 1000)

    socket.on('disconnect', function () {
      console.log('disconnected')
      clearInterval(interval)
    })
  })
}
