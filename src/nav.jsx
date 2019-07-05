import React, {Component} from "react";

class Nav extends Component{
	constructor(props){
		super(props)
	}
	render(){	//Display number of users online and logo
	return (
		<nav id="navbar">
			<span className = "userCount">{this.props.usersOnline} USERS ONLINE</span>
				<a href="/" className="navbar-brand"><h1>Chatty</h1></a>
			<span className="border"></span>
		</nav>);
	}
}

module.exports = Nav;