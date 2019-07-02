import React, {Component} from 'react';
import Nav from './nav.jsx'
import Message from './Message.jsx'
import SystemMessage from './SystemMessage.jsx'
import MessageList from './Message-list.jsx';
import Footer from './footer.jsx'
import Loading from './Loading.jsx'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {currentUser: "Aidan", messages: [{username: "aidan", content: "I love pizza"}], loading: true} 
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
      <Message messages={this.state.messages}/>
      <SystemMessage/>
      <Footer user={this.state.currentUser}/>
      </div>
      );
  }
}




export default App;

