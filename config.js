const fs = require('fs')
const os = require('os')
const path = require('path')
const convict = require('convict')

const config = convict({
  env: {
    doc: 'The applicaton environment',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  httpHost: {
    doc: 'The host name to bind to for HTTP server',
    format: String,
    default: '0.0.0.0',
    env: 'HTTP_HOST'
  },
  httpPort: {
    doc: 'The port to bind to for HTTP server',
    format: 'port',
    default: 8000,
    env: 'HTTP_PORT'
  },
  redisHost: {
    doc: 'The host name to connect to for Redis server',
    format: String,
    default: '0.0.0.0',
    env: 'REDIS_HOST'
  },
  redisPort: {
    doc: 'The port to connect to for Redis server',
    format: 'port',
    default: 6379,
    env: 'REDIS_PORT'
  },
  workers: {
    doc: 'The number of worker processes',
    format: 'nat',
    default: os.cpus().length || 1,
    env: 'SC_WORKERS'
  },
  socketChannelLimit: {
    doc: 'The max number of unique channels a single socket can subscribe to',
    format: 'nat',
    default: 1000,
    env: 'SC_SOCKET_CHANNEL_LIMIT'
  }
})

const configFile = path.join(__dirname, '.env.json')
fs.open('myfile', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      return
    } else {
      throw err
    }
  }

  config.loadFile(configFile)
})

config.validate({ strict: true })

module.exports = config
