import React, { Component } from 'react';
import macitoMadera from '../../assets/img/Mazo.jpg'
class ContactUs extends Component {

	renderLeftSide(isMobile){
		return(
			<div className="left-area pull-left">
	          	<div className="left-form">
	                <div className="form-title black">
	                    <span className="strong">FREE </span>CONSULTATION
	                </div>
	                <div style={{padding: "0px 5px"}} className="text-yellow">Have a question or need information?</div>
	                <div className="form-body">
		                <div className="form-group inline">
		                   	<div className="strong text-yellow">Full name:</div>
		                    <input type="text" className="form-input" placeholder={"Ingresa tu nombre"}/>
		                 </div>
						<div className="form-group inline">
		                    <div className="strong text-yellow">E-mail:</div>
		                    <input type="text" className="form-input" placeholder={"Ingresa tu e-mail"}/>
		                </div>
		                <div className="form-group">
		                    <div className="strong text-yellow">Subject:</div>
		                    <input type="text" className="form-input" placeholder={"Ingresa tu asunto"}/>
		                </div>
		                <div className="form-group">
	                    	<span className="strong text-yellow">Your message:</span>
	                    	<textarea placeholder={"Ingresa tu situación"}/>
	                    </div>
	                    <div className="form-group submit">
	                    	{isMobile ?<center><button>Submit</button></center> : <button>Submit</button>}
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
           			<img className="img-mazo" src={macitoMadera}/>
	            </div>	 	
            </div>
			)
	}
    render() {
    	const {isMobile} = this.props
        return (
            <div className="full-width book-online-container">
          		{this.renderLeftSide(isMobile)}
                {isMobile ? null : this.renderRightSide()}
            </div>
        );
    }
}

export default ContactUs;
