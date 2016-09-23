const fs = require('fs')
const os = require('os')
const path = require('path')
const convict = require('convict')

convict.addFormat({
  name: 'staticUrl',
  validate: (val) => {
    if (val[val.length - 1] !== '/') {
      throw new Error('must end with `/`')
    }
  },
  coerce: (val, config) => {
    return val.replace(/\$\{([\w\.]+)}/g, function (v, m) { return config.get(m) })
  }
})

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
  },
  staticUrl: {
    doc: 'The url that referrs to static assets',
    format: 'staticUrl',
    default: 'https://${httpHost}:${httpPort}/static/',  // eslint-disable-line
    env: 'STATIC_URL'
  }
})

// check if config file exists before attempting to load it
const configFile = path.join(__dirname, '.env.json')
try {
  fs.openSync(configFile, fs.constants.O_RDONLY)
  config.loadFile(configFile)
} catch (err) {
  if (err.code !== 'ENOENT') {
    throw err
  }
}

config.validate({ strict: true })

module.exports = config
