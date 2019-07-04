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

    changeUsername = (evt) =>{
        evt.preventDefault();
        const newUsername = evt.target;
        this.props.changeUser(newUsername.value);
            newUsername.value = "";
        }

    render(){
        console.log(this)
    return (
    <footer id="chatbar">
            <input onBlur={this.changeUsername} className="chatbar-username" name="usernameForm" placeholder={this.props.user} />
        <form onSubmit={this.onSubmit}>
            <input className="chatbar-message-form" className="chatbar-message" placeholder= "Type your message and hit enter" name="messageContent"/> </form>
    </footer>);
    }
}

export default Footer;