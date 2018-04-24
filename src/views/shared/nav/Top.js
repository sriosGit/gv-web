
import React, { Component } from 'react';
import logo from '../../../assets/img/logo.png';
//import Search from './Search'
import { Link } from 'react-router-dom'
//import UserNav from './UserNav'
//import Notifications from './Notifications'
//import style from '../../../styles/nav'
import emailIcon from '../../../assets/img/emai-icon.svg'
import phoneIcon from '../../../assets/img/phone-icon.svg'
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
	render = () => {
		const emailTitle = "Questions?"
		const emailSubtitle = "Send us and email"
		const phoneTitle = "Call us on:"
		const phoneSubtitle = "+1-123-456-789"

		return (
			<div className="navbar navbar-white no-padding">
				<div className="navbar-header App-logo pull-left">
					<Link to={"/"} className="nav-brand linked"><img src={logo}></img></Link>
				</div>
				<div className="pull-right contact">
					<Link to={"/contactus"} className="nav-brand linked">{this.renderContact(emailIcon, emailTitle, emailSubtitle)}</Link>
					{this.renderContact(phoneIcon, phoneTitle, phoneSubtitle)}
				</div>
			</div>
		);
	}
}

export default Top;