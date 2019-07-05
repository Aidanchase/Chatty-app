// server.js
const express = require("express");
const WebSocket = require("ws");
const uuid = require("uuid/v4");

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new WebSocket.Server({ server });

const broadcast = (message) =>{  //function to send out messages to all clients 
  wss.clients.forEach(function each(client){
    if (client.readyState === WebSocket.OPEN){
      client.send(message)
    }
  });
}

wss.on("connection", (ws) => {  //callback for when client connects to wss 
  console.log("Client connected");
  const numberOfUsers =  {type: "numberOfUsers", number: wss.clients.size, content: "A user has joined the chat", id: uuid()};
  broadcast(JSON.stringify(numberOfUsers))

  ws.on("message", message =>{  //callback for when client sends message
    let incomingMessage = JSON.parse(message);
    if (incomingMessage.type === "sendMessage" ||   incomingMessage.type === "notification"){
      let outgoingMessage = Object.assign({id: uuid()}, incomingMessage)
      broadcast(JSON.stringify(outgoingMessage));
    } 
  })

  ws.on("close", () => {console.log("Client disconnected"); //callback for when client closes socket 
  const numberOfUsers =  {type: "numberOfUsers", number: wss.clients.size, content: "A user has left the chat", id: uuid()};
  broadcast(JSON.stringify(numberOfUsers));
})
});
