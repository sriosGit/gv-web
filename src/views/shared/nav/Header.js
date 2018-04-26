import React, { Component } from 'react';
import Top from './Top'
import Bottom from './Bottom'
import '../../../assets/css/nav.css'
class Header extends Component {

	render = () => {
		const {isMobile} = this.props
		return (
			<nav className="container" id="navbar">
				<Top isMobile={isMobile}/>
				{window.innerWidth <= 800 ? null :<Bottom/>}
			</nav>
		);
	}
}

export default Header;