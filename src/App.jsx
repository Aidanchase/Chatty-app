import React, { Component } from "react";
import Nav from "./nav.jsx";
import SystemMessage from "./SystemMessage.jsx";
import MessageList from "./Message-list.jsx";
import Footer from "./ChatBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { usersOnline: 0, currentUser: "Keanu", messages: [], loading: false };
  };
  componentDidMount() {
    this.ws = new WebSocket('ws://localhost:3001');
    this.ws.onopen = function(e){
      console.log('I\'m Open!');
    };

    this.ws.onmessage = (event) =>{
      const newMessage = JSON.parse(event.data)   
      if (newMessage.type === "numberOfUsers"){
        this.setState(oldState => {
          return {
            messages: [...oldState.messages, newMessage],
            usersOnline: newMessage.number 
          }
        })
      } else {
          this.setState(oldState => {
            return {messages: [...oldState.messages, newMessage]}
        });
      }
    };
    this.ws.onclose = function(e){
      console.log('The session is over!')
    };
    
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {
        id: -1,
        username: "Johnny",
        content: "Wake the F&*^ up Samurai, we have  a city to burn...",
        type: "sendMessage"
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
  
  //add key value pairs to message object to send to server 
  addMessage = (message) =>{
    this.ws.send(JSON.stringify({type: "sendMessage", content: message, username: this.state.currentUser}))
  };

  changeUser = newUsername => {   //update state of current user on change and send to server 
    const systemNotification = {
      type: "notification", content: `${this.state.currentUser} changed their name to ${newUsername}`, username: newUsername
    }
    this.ws.send(JSON.stringify(systemNotification))
    this.setState({currentUser: newUsername})
  }
  render() {  //render components with necessary dynamically generated data
    return (
      <div>
        <Nav usersOnline={this.state.usersOnline}/>
        <MessageList usersOnline={this.state.usersOnline} messages={this.state.messages} />
        <Footer changeUser={this.changeUser} newMessage={this.addMessage}  user={this.state.currentUser}/>
      </div>
    );
  }
};

export default App;
