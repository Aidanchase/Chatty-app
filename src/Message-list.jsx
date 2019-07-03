import React, {Component} from 'react';
import Message from "./Message.jsx";

class MessageList extends Component {
    render(){
        return (
            <main className="messages">
                {this.props.messages.map(mssg => 
                    <Message
                    key={mssg.id}
                    message={mssg}
                    />
                )}
            </main>);
    }
}

export default MessageList;