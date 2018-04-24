import React, { Component } from 'react';
import Top from './Top'
import Bottom from './Bottom'
import '../../../assets/css/nav.css'
class Header extends Component {

	render = () => {

		return (
			<nav className="container page-max1024" id="navbar">
				<Top/>
				<Bottom/>
			</nav>
		);
	}
}

export default Header;