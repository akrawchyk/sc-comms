const os = require('os')
const path = requre('path')
const convict = require('convict')

const config = convict({
  env: {
    doc: 'The applicaton environment',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  host: {
    doc: 'The host name to bind to',
    format: String,
    default: '0.0.0.0',
    env: 'HOST'
  }
  port: {
    doc: 'The port to bind to',
    format: 'port',
    default: 8000,
    env: 'PORT'
  },
  workers: {
    doc: 'The number of worker processes'
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

config.loadFile(path.join(__dirname, '.env.json'))

config.validate({ strict: true })

module.exports = config
