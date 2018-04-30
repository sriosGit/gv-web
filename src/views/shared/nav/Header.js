import React, { Component } from 'react';
import Top from './Top'
import Bottom from './Bottom'
import '../../../assets/css/nav.css'
class Header extends Component {

	renderMobileBar(isMobile){
		return(
			<nav className="navbar navbar-white navbar-fixed-top " id="navbar">
				<Top isMobile={isMobile}/>
			</nav>
			)
	}

	renderDesktopBar(isMobile){
		return (
			<nav className="container" id="navbar">
				<Top classes={"navbar navbar-white "} isMobile={isMobile}/>
				<Bottom/>
			</nav>
		);
	}

	render = () => {
		var isMobile = window.innerWidth <= 800
		return (
			<div>
			{ isMobile ? this.renderMobileBar(isMobile) : this.renderDesktopBar(isMobile)}
			</div>
		);
	}
}

export default Header;