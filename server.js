const os = require('os')
const path = require('path')
const SocketCluster = require('socketcluster').SocketCluster
const config = require('./config')

const socketCluster = new SocketCluster({
  workers: os.cpus().length || 1,
  brokers: 1,
  port: config.get('port')
  appName: 'app',
  wsEngine: 'uws',
  workerController: path.join(__dirname, '/worker.js'),
  brokerController: path.join(__dirname, '/broker.js'),
  socketChannelLimit: 1000,
  rebootWorkerOnCrash: true
  // clusterAuthKey: process.env.SCC_AUTH_KEY || null,
})
