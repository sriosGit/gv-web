import React, { Component } from 'react';
import GMap from './Map'
import { assingValue } from '../../../helpers/stateHelper'
class ContactUs extends Component {

	constructor(props) {
        super(props)
        this.state = {
            isMobile: window.innerWidth <= 800 || false,
            name: "",
            email: "",
            topic: "",
            message: ""
        }
        
    }
 	componentWillMount = () => {
      	this.updateDimensions()
  	}
  	componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);
  	}
  	componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
  	}
  	updateDimensions = () => {
  		if(window.innerWidth <= 800){
  		 	this.setState({isMobile: true})	
  		}else if(this.state.isMobile && window.innerWidth > 800){
  			this.setState({isMobile: false})	
  		}

  	}
  	submit(){
  		const {name, email, topic, message} = this.state
  		window.open('mailto:cecilia@gvaisman.com?subject='+topic+' - '+name+' - '+email+'&body='+message);
  	}
	renderLeftSide(){
		return(
			<div className="left-area pull-left">
	          	<div className="left-form">
	                <div className="form-title">
	                    <span className="strong">CONTACT </span>US NOW!
	                </div>
	                <div style={{padding: "0px 5px"}} className="text-yellow">Have a question or need information?</div>
	                <div className="form-body">
		                <div className="form-group inline">
		                   	<div className="strong text-yellow">Full name:</div>
		                    <input name="name" onChange={ assingValue.bind(this) } id="nombre" type="text" className="form-input" placeholder={"Ingresa tu nombre"}/>
		                 </div>
						<div className="form-group inline">
		                    <div className="strong text-yellow">E-mail:</div>
		                    <input name="email" onChange={ assingValue.bind(this) } id="email" type="text" className="form-input" placeholder={"Ingresa tu e-mail"}/>
		                </div>
		                <div className="form-group">
		                    <div className="strong text-yellow">Subject:</div>
		                    <input name="topic" onChange={ assingValue.bind(this) } id="asunto" type="text" className="form-input" placeholder={"Ingresa tu asunto"}/>
		                </div>
		                <div className="form-group">
	                    	<span className="strong text-yellow">Your message:</span>
	                    	<textarea name="message" onChange={ assingValue.bind(this) } id="nombre" placeholder={"Ingresa tu situación"}/>
	                    </div>
	                    <div className="form-group submit">
	                    	<button onClick={this.submit.bind(this)}>Submit</button>
	                    </div>
	                </div>
	          	</div>
          	</div>
			)
	}
	renderContactForm(){
		return(
			<div className="contact-form">
	          	<div>
	                <div className="form-title">
	                    <span className="strong">CONTACT </span>US NOW!
	                </div>
	                <div style={{padding: "0px 5px"}} className="text-yellow">Have a question or need information?</div>
	                <div className="form-body">
		                <div className="form-group">
		                   	<div className="strong text-yellow">Full name:</div>
		                    <input name="name" onChange={ assingValue.bind(this) } type="text" className="form-input" placeholder={"Ingresa tu nombre"}/>
		                 </div>
						<div className="form-group">
		                    <div className="strong text-yellow">E-mail:</div>
		                    <input name="email" onChange={ assingValue.bind(this) } type="text" className="form-input" placeholder={"Ingresa tu e-mail"}/>
		                </div>
		                <div className="form-group">
		                    <div className="strong text-yellow">Subject:</div>
		                    <input name="topic" onChange={ assingValue.bind(this) } type="text" className="form-input" placeholder={"Ingresa tu asunto"}/>
		                </div>
		                <div className="form-group">
	                    	<span className="strong text-yellow">Your message:</span>
	                    	<textarea name="message" onChange={ assingValue.bind(this) } placeholder={"Ingresa tu situación"}/>
	                    </div>
	                    <div className="form-group submit">
	                    	<button>Submit</button>
	                    </div>
	                </div>
	          	</div>
          	</div>
			)
	}
	renderRightSide(){
		return(
			<div className="right-area pull-right">
           		<div className="right-details">
	                <div className="form-title">
	                    <span className="strong">OUR </span>ADDRESS
	                </div>
	                <div style={{padding: "0px 5px"}} className="text-yellow">LIMA, PERU <br/>SURQUILLO<br/>AV. ALFREDO MOSSER 123</div>
	                <p style={{padding: "0px 5px"}} className="text-yellow">PHONE: 123-4564-789 <br/>E-MAIL: srios0u@gmail.com<br/>FAX: neverusedfaxinmylife@fax.com</p>
	                <div className="map-container">
	                	<GMap cords={{lat: 40.854885, lng: -88.081807}} title={"Gamarra Vaisman & Associates"} name="Av. Alfredo Mosser 123"/>
	                </div>
	          	</div> 	
            </div>
			)
	}
	renderContactInfo(){
		return(
			<div className="right-area">
           		<div className="right-details">
	                <div className="form-title">
	                    <span className="strong">OUR </span>ADDRESS
	                </div>
	                <div style={{padding: "0px 5px"}} className="text-yellow">LIMA, PERU <br/>SURQUILLO<br/>AV. ALFREDO MOSSER 123</div>
	                <p style={{padding: "0px 5px"}} className="text-yellow">PHONE: 123-4564-789 <br/>E-MAIL: srios0u@gmail.com<br/>FAX: neverusedfaxinmylife@fax.com</p>
	          	</div> 	
            </div>
			)
	}
    render() {
    	const {isMobile} = this.state
        return (
	        <div className="full-width contact-us-container">
	          		{isMobile ? this.renderContactForm() : this.renderLeftSide()}
	                {isMobile ? this.renderContactInfo() : this.renderRightSide()}
            </div>
        );
    }
}

export default ContactUs;
