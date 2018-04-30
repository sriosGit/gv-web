import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/nav.css'
class Bottom extends Component {




	render = () => {
		return (
			<center>
				<div className="bottom-nav">
					<Link to={"/"} ><div className="link-container">INICIO</div></Link>
					<Link to={"/services"} ><div className="link-container">SERVICIOS</div></Link>
					<Link to={"/about"} ><div className="link-container">QUIENES SOMOS</div></Link>
					<Link to={"/contactus"} ><div className="link-container">CONTACTANOS</div></Link>
					<Link to={"/bookwithus"} ><div className="link-container-left">RESERVA TU CITA</div></Link>
				</div>
			</center>
		);
	}
}
export default Bottom;
