const os = require('os')
const path = require('path')
const SocketCluster = require('socketcluster').SocketCluster
const config = require('./config')

const socketCluster = new SocketCluster({
  host: config.get('httpHost'),
  port: config.get('httpPort'),
  workers: os.cpus().length || 1,
  brokers: 1,
  appName: 'app',
  wsEngine: 'uws',
  workerController: path.join(__dirname, '/worker.js'),
  socketChannelLimit: config.get('socketChannelLimit'),
  rebootWorkerOnCrash: true
  // clusterAuthKey: process.env.SCC_AUTH_KEY || null,
})
