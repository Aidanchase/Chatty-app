import React, {Component} from 'react';

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
const Nav = props => {
return (<nav id="navbar">
<a href="/" className="navbar-brand"><h1>Chatty</h1></a>
</nav>);
    }

const Main = props => {
  return (<main className="messages">
  <div className="message">
    <span className="message-username">Anonymous1</span>
    <span className="message-content">I won't be impressed with technology until I can download food.</span>
  </div>
  <div className="message-system">
    Anonymous1 changed their name to nomnom.
  </div>
  </main>);
}

const Footer = props => {
  return (<footer id="chatbar">
  <input className="chatbar-username" placeholder="Your Name (Optional)" />
  <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
  </footer>);
}

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
    <div>
    <Nav/>
    <Main/>
    <Footer/>
    </div>
      );
  }
}

export default App;
