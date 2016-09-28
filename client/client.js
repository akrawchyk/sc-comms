import socketCluster from 'socketcluster-client'
// import './client.css'  // FIXME

const socket = socketCluster.connect()
const messagesEl = document.getElementById('messages')

socket.on('job.message', (message) => {
  const formattedMessage = `${JSON.stringify(message)}\n`
  messagesEl.appendChild(new window.Text(formattedMessage))
})
