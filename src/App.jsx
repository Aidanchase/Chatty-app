import React, { Component } from "react";
import Nav from "./nav.jsx";
import Message from "./Message.jsx";
import SystemMessage from "./SystemMessage.jsx";
import MessageList from "./Message-list.jsx";
import Footer from "./footer.jsx";

const userInfo = {
  currentUser: { name: "Bob" } // optional. if currentUser is not defined, it means the user is Anonymous
};
const messageData = [
  {
    username: "Bob",
    content: "Has anyone seen my marbles?"
  },
  {
    username: "Anonymous",
    content:
      "No, I think you lost them. You lost your marbles Bob. You lost them for good."
  }
];
const generateKey = () => {
  return Math.random().toString();
};
const listMessages = mssgs => {
  const messages = [];
  mssgs.forEach(mssg => {
    messages.push(
      <Message
        key={generateKey()}
        username={mssg.username}
        content={mssg.content}
      />
    );
  });
  return messages;
};
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
  render() {
    if (this.state.loading) {
      return <div>{Loading()}</div>;
    }
    return (
      <div>
        {Nav()}
        <MessageList messages={listMessages(this.state.messages)} />
        <SystemMessage />
        <Footer />
      </div>
    );
  }
}

export default App;
