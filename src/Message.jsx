import React, { Component } from "react";


class Message extends Component {
  constructor(props){
    super(props)
    this.state = {id: this.props.message.id, content: ""}
    this.delayCont(props.message.content)
  }
  delayCont = (content)=>{
    let delay = 0;
    for (let char of content){
      setTimeout(function () {
        this.setState({content: this.state.content += char})}.bind(this), delay+=10)
    } 
};

  render() {
    return (
      <div className="message">
        <span className="message-username">$_ 
        {this.props.message.username}</span>
        <span className="message-content">{this.state.content}</span>
      </div>
    );
  }
}

export default Message;

{/* <DelayedText text={this.props.username}/></span> */}
