import React, {Component} from 'react';
import Nav from './nav.jsx'
import Message from './Message.jsx'
import SystemMessage from './SystemMessage.jsx'
import MessageList from './Message-list.jsx';
import Footer from './footer.jsx'
import Loading from './Loading.jsx'
{/* c
<main class="messages">
<div class="message">
  <span class="message-username">Anonymous1</span>
  <span class="message-content">I won't be impressed with technology until I can download food.</span>
</div>
<div class="message system">
  Anonymous1 changed their name to nomnom.
</div>
</main>
<footer class="chatbar">
<input class="chatbar-username" placeholder="Your Name (Optional)" />
<input class="chatbar-message" placeholder="Type a message and hit ENTER" />
</footer>); */}

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
      <MessageList/>
      <Message/>
      <SystemMessage/>
      <Footer user={this.state.currentUser}/>
      </div>
      );
  }
}




export default App;

