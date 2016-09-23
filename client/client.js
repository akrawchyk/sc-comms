import 'babel-polyfill'
import socketCluster from 'socketcluster-client'
// import './client.css'

const socket = socketCluster.connect()
socket.emit('sampleClientEvent', {
  message: 'This is an object with a message property' })

// socket.on('message', (data) => {
//   console.log(data)
// })

socket.on('job.message', (data) => {
  if (data.progress) {
    console.log('progress', data.progress)
  } else {
    if (data.status === 'started') {
      console.log('job.started', data)
    }

    if (data.status === 'complete') {
      console.log('job.complete', data)
    }

    if (data.status === 'failed') {
      console.log('job.failed', data)
    }
  }
})
