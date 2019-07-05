import React, { Component } from "react";



class Message extends Component { //Access state and dynamically display content one char at a time 
  constructor(props){ 
    super(props)
    this.state = {id: this.props.message.id, content: ""}
    this.delayCont(props.message.content)
  };
  delayCont = (content)=>{  //delay each character to create terminal effect
    let delay = 0;
    for (let char of content){
      setTimeout(function () {
        this.setState({content: this.state.content += char})}.bind(this), delay+=20)
    }; 
  };
  render() {
    return (
      <div  className="message">
        <span className="message-username">$_ 
        {this.props.message.username}</span>
        <span className="message-content">{this.state.content}</span>
      </div>
    );
  };
};

export default Message;

{/* <DelayedText text={this.props.username}/></span> */}