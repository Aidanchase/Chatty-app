import React, {Component} from 'react';
import Nav from './nav.jsx'
import Message from './Message.jsx'
import SystemMessage from './SystemMessage.jsx'
import MessageList from './Message-list.jsx';
import Footer from './footer.jsx'
import Loading from './Loading.jsx'

const userInfo = {
    currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
}
    const messageData = [
      {
        username: "Bob",
        content: "Has anyone seen my marbles?",
      },
      {
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
      }
    ]
    const generateKey = () =>{
      return Math.random().toString();
  }
  const listMessages = (mssgs)=>{
    const messages=[];
    mssgs.forEach((mssg)=>{
      messages.push(<Message key={generateKey()} username={mssg.username} content={mssg.content}/>);
    })
    return messages;
  }
class App extends Component {
  constructor(props){
    super(props)
    this.state = {currentUser: "Aidan", loading: true} 
  }
    componentDidMount() {
      // After 3 seconds, set `loading` to false in the state.
      setTimeout(() => {
        this.setState({loading: false}); // this triggers a re-render!
      }, 3000)
    }
  render(){
    if(this.state.loading){
      return (<div>{Loading()}</div>);
    }
    return (
      <div>
      {Nav()}
      <MessageList messages={listMessages(messageData)}/>
      <SystemMessage/>
      <Footer />
      </div>
      );
  }
}




export default App;

