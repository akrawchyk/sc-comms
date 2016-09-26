const path = require('path')
const express = require('express')
const nunjucks = require('nunjucks')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const jobs = require('./routes/jobs')
const config = require('./config')

const app = express()

// configure nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: config.get('env') === 'development'
})

// confiugure express
app.set('x-powered-by', false)
app.locals.static = (text) => {
  return `${config.get('staticUrl')}${text}`
}

// setup middlewares
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// setup routes
app.use('/', routes)
app.use('/jobs', jobs)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error.html', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error.html', {
    message: err.message,
    error: {}
  })
})

module.exports = app
