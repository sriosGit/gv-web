import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/nav.css'
class Bottom extends Component {




	render = () => {
		return (
			<center>
				<div className="bottom-nav">
					<Link to={"/"} ><div className="link-container">HOME</div></Link>
					<Link to={"/services"} ><div className="link-container">PRACTICE AREA</div></Link>
					<Link to={"/about"} ><div className="link-container">ABOUT US</div></Link>
					<Link to={"/contactus"} ><div className="link-container">CONTACT</div></Link>
					<Link to={"/bookwithus"} ><div className="link-container-left">BOOK ONLINE</div></Link>
				</div>
			</center>
		);
	}
}
export default Bottom;
