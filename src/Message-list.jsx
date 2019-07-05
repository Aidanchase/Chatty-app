import React, {Component} from 'react';
import Message from "./Message.jsx";
import SystemMessage from './SystemMessage.jsx';

class MessageList extends Component { //Check the type of incoming message and render appropriately 
  render(){
    return (
      <main className="messages">
        {this.props.messages.map((mssg) => {
          if(mssg.type === "sendMessage"){
            return (
            <Message
              key={mssg.id}
              message={mssg}
            />)
          }
          if(mssg.type === "notification" || mssg.type === "numberOfUsers"){
            return (
              <SystemMessage
                key={mssg.id}
                message={mssg}
              />
            )
          }
        })}
      </main>
    );
  }
}

export default MessageList;