import React, { Component } from "react";
import Nav from "./nav.jsx";
import SystemMessage from "./SystemMessage.jsx";
import MessageList from "./Message-list.jsx";
import Footer from "./ChatBar.jsx";
//const ws = new WebSocket(location.origin.replace()));
//ws.addeventlistener('open', ()=>{ws.send('wtv)}))}
//ws.addeventlistener('message', (msg) =>{document.getElementById('messages).appendChils(document.createTextNode(msg/datas))})

// const generateKey = () => {
//   return Math.random().toString();
// };

const userInfo = {
  currentUser: { name: "Bob" } // optional. if currentUser is not defined, it means the user is Anonymous
};
const messageData = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: "Keanu", messages: messageData, loading: false };
  };
  componentDidMount() {
    this.ws = new WebSocket('ws://localhost:3001');
    this.ws.onopen = function(e){
      console.log('I\'m Open!');
    };
    this.ws.onclose = function(e){
      console.log('The session is over!')
    };
    this.ws.onmessage = (event) =>{
      const {username, content, id} = JSON.parse(event.data)
      const getNewMessage = {
            username,
            content,
            id
        }
        this.setState(oldState => {
          return {messages: [...oldState.messages, getNewMessage]}
        });
    }
    
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {
        id: -1,
        username: "Michelle",
        content: "Hello there!"
      };
      const messages = this.state.messages.concat(newMessage);
      // Update the state of the app component
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages });

    }, 3000);
  //   setTimeout(() => {
  //     this.setState({ loading: false }); // this triggers a re-render!
  //   }, 3000);
  // }
  };
  
  addMessage = (message) =>{
    this.ws.send(JSON.stringify({type: "sendMessage", content: message, username: this.state.currentUser}))
  };

  render() {
    if (this.state.loading) {
      return <div>{Loading()}</div>;
    }
    return (
      <div>
        {Nav()}
        <MessageList messages={this.state.messages} />
        <SystemMessage />
        <Footer newMessage={this.addMessage}  user={this.state.currentUser}/>
      </div>
    );
  }
};

export default App;

// addMessage = message =>{
  // const newMessage = {
  //     id: generateKey(),
  //     username: this.state.currentUser,
  //     content: message
  // }
  // let tempMessages = this.state.messages;
  // tempMessages.push(newMessage);
  // this.setState({tempMessages});
// }