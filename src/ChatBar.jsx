import React, {Component} from 'react';

class Footer extends Component {
    constructor(props){
        super(props)
    }
    onSubmit = evt =>{
        if(evt.target.elements.messageContent.value === ""){
            console.log("NO")
        }
        evt.preventDefault();
        const newMessage = evt.target.elements.messageContent;
        this.props.newMessage(newMessage.value);
        newMessage.value = "";
    }

    changeUsername = (evt) =>{
        evt.preventDefault();
        const newUsername = evt.target;
        if (newUsername.value === ""){
            this.props.changeUser("Anonymous");
            newUsername.value = "";
        } else if (newUsername.value === this.props.user){
            console.log("No change")
        } else {
            this.props.changeUser(newUsername.value)
        }
    }

    render(){
        console.log(this.props.user)
    return (
    <footer id="chatbar">
        <input onBlur={this.changeUsername} className="chatbar-username" name="usernameForm" placeholder={this.props.user} />
        <form onSubmit={this.onSubmit}>
            <input className="chatbar-message-form" className="chatbar-message" placeholder= "Type your message and hit enter" name="messageContent"/> 
        </form>
    </footer>);
    }
}

export default Footer;