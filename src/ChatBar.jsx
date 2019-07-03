import React, {Component} from 'react';

class Footer extends Component {
    constructor(props){
        super(props)
    }
    onSubmit = evt =>{
        evt.preventDefault();
        const newMessage = evt.target.elements.messageContent;
        this.props.newMessage(newMessage.value);
        newMessage.value = "";
    }

    changeUsername = evt =>{
        evt.preventDefault;
        const newUsername = evt.target.elements.usernameForm;
        this.setState({username: newUsername})
    }
    render(){
    return (
    <footer id="chatbar">
        <form onSubmit={this.changeUsername}className="chatbar-user-form">
            <input className="chatbar-username" name="usernameForm" placeholder={this.props.user} />
        </form>
        <form onSubmit={this.onSubmit}>
            <input className="chatbar-message-form" className="chatbar-message" placeholder= "Type your message and hit enter" name="messageContent"/> </form>
    </footer>);
    }
}

export default Footer;