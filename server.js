const path = require('path')
const SocketCluster = require('socketcluster').SocketCluster

const socketCluster = new SocketCluster({
  workers: 1,
  brokers: 1,
  port: 8000,
  appName: 'app',
  wsEngine: 'uws',
  workerController: path.join(__dirname, '/worker.js'),
  brokerController: path.join(__dirname, '/broker.js'),
  socketChannelLimit: 1000,
  rebootWorkerOnCrash: true
  // clusterAuthKey: process.env.SCC_AUTH_KEY || null,
})
