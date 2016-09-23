import 'babel-polyfill'
import socketCluster from 'socketcluster-client'
// import './client.css'

const socket = socketCluster.connect()
socket.emit('sampleClientEvent', {
  message: 'This is an object with a message property' })
