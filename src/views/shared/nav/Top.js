
import React, { Component } from 'react';
import logo from '../../../assets/img/logo4.png';
//import Search from './Search'
import { Link } from 'react-router-dom'
//import UserNav from './UserNav'
//import Notifications from './Notifications'
//import style from '../../../styles/nav'
import emailIcon from '../../../assets/img/emai-icon.svg'
import phoneIcon from '../../../assets/img/phone-icon.svg'
import { fallDown as Menu } from 'react-burger-menu'

class Top extends Component {

	renderContact(img, title, subtitle){
		return(
			<div style={{marginRight: 25}} className="inline">
				<div className="pull-left">
					<img src={img}></img>
				</div>
				<div className="info-contact">
				<div className="title-tab">{title}</div>
				<div className="subtitle-tab">{subtitle}</div>
				</div>
			</div>
			)
	}
	renderRightSide(){
		const emailTitle = "Questions?"
		const emailSubtitle = "Send us and email"
		const phoneTitle = "Call us on:"
		const phoneSubtitle = "+1-123-456-789"
		return(
				<div className="pull-right contact">
					<Link to={"/contactus"} className="nav-brand linked">{this.renderContact(emailIcon, emailTitle, emailSubtitle)}</Link>
					{this.renderContact(phoneIcon, phoneTitle, phoneSubtitle)}
				</div>
			)
	}
	renderBurgerMenu(){
		return(
			<div className="inline">
				<Menu width={'30%'} right>
			        <a id="home" className="menu-item" href="/">Home</a>
			        <a id="about" className="menu-item" href="/about">About</a>
			        <a id="contact" className="menu-item" href="/contact">Contact</a>
			        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
			    </Menu>
		    </div>
      )
	}
	render = () => {
		const {isMobile} = this.props
		return (
			<div className="navbar navbar-white no-padding">
				<div className="navbar-header App-logo pull-left inline">
					<Link to={"/"} className="nav-brand linked"><img src={logo}></img></Link>
				</div>
				{window.innerWidth <= 800 ? this.renderBurgerMenu() : this.renderRightSide()}
			</div>
		);
	}
}

export default Top;