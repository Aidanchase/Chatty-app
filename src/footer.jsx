import React, {Component} from 'react';

class Footer extends Component {
    constructor(props){
        super(props)
    }
    render(){
    return (
    <footer id="chatbar">
        <input className="chatbar-username" placeholder={this.props.user} />
        <input className="chatbar-message" placeholder= "Type your message and hit enter"/>
    </footer>);
    }
}

export default Footer;