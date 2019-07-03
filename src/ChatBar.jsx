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
    render(){
        console.log(this)
    return (
    <footer id="chatbar">
     <form>
     <input className="chatbar-username" placeholder={this.props.user} />
     </form>
     <form onSubmit={this.onSubmit}>
     <input onSubmit={this.onSubmit}className="chatbar-message" placeholder= "Type your message and hit enter" name="messageContent"/>
     </form>
    </footer>);
    }
}

export default Footer;