// server.js
const express = require('express');
const WebSocket = require('ws');
const uuid = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new WebSocket.Server({ server });

const broadcast = (message) =>{
  wss.clients.forEach(function each(client){
    if (client.readyState === WebSocket.OPEN){
      client.send(message)
    }
  });
}
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', message =>{
    let incomingMessage = JSON.parse(message);
    let outgoingMessage = Object.assign({id: uuid()}, incomingMessage)
    broadcast(JSON.stringify(outgoingMessage));
  })
  
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});



// const wsserver = new WsServer({server});

// let idToName ={}
// wsserver.on('connection', (client) =>{
//   console.log('New client', req);
//   const userId = Math.random;
//   idToName[userId] = "Anonymoose";
//   client.userId = userId;


// client.on('message', (msgData) =>{
//   console.log(`message from user ${userId}: ${msgData}`)
//   idToName[userId] = msgData;
// })
// client.on('close', () =>{
//   console.log('client left')
// })
// });
// wsserver.options('connection', (client) => {
//   console.log('Connected to wsserver')
// })