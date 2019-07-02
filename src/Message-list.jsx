import React, {Component} from 'react';
class MessageList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
    <main className="messages">
        {this.props.messages}
    </main>);
    }
}

export default MessageList;