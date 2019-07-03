import React, { Component } from "react";
import Nav from "./nav.jsx";

import SystemMessage from "./SystemMessage.jsx";
import MessageList from "./Message-list.jsx";
import Footer from "./ChatBar.jsx";

const generateKey = () => {
  return Math.random().toString();
};

const userInfo = {
  currentUser: { name: "Bob" } // optional. if currentUser is not defined, it means the user is Anonymous
};
const messageData = [
  {
    id: generateKey(),
    username: "Bob",
    content: "Has anyone seen my marbles?"
  },
  {
    id: generateKey(),
    username: "Anonymous",
    content:
      "No, I think you lost them. You lost your marbles Bob. You lost them for good."
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: "Aidan", messages: messageData, loading: false };
  }
  componentDidMount() {
    // After 3 seconds, set `loading` to false in the state.
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {
        id: 3,
        username: "Michelle",
        content: "Hello there!"
      };
      const messages = this.state.messages.concat(newMessage);
      // Update the state of the app component.
      console.log(messages)
      
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages });
      console.log(this.state)
    }, 3000);
  //   setTimeout(() => {
  //     this.setState({ loading: false }); // this triggers a re-render!
  //   }, 3000);
  // }
  }
  addMessage = message =>{
    const newMessage = {
        id: generateKey(),
        username: this.state.currentUser,
        content: message
    }
    let tempMessages = this.state.messages;
    tempMessages.push(newMessage);
    this.setState({tempMessages});
}
  render() {
    if (this.state.loading) {
      return <div>{Loading()}</div>;
    }
    return (
      <div>
        {Nav()}
        <MessageList messages={this.state.messages} />
        <SystemMessage />
        <Footer newMessage={this.addMessage} generateKey={generateKey} user={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;