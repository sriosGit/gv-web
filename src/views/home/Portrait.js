import React, { Component } from 'react';
import portrait_art from '../../assets/img/portrait-art.jpg'

class Portrait extends Component {
	renderDesktopPortrait(){
		return(
			<div className="full-width portrait-container">
	      		<div className="portrait-section">
	      			<figure className="tint t2">
	      			<img className="portrait-art" src={portrait_art} alt="portrait-art" />
	      			</figure>
	      			<center className="portrait-text">
		      			<span className="portrait-title">BOUTIQUE LAW FIRM</span><br/>
		      			<span>Specializing in Comercial Law & Litigation, Insolvency & Fraud</span>
	      			</center>
	      		</div>
      		</div>
      	)
	}

  render() {

    return (
      <div className="full-width portrait-container">
      		<div className="portrait-section">
      			<figure className="tint t2">
      			<img className="portrait-art" src={portrait_art} alt="portrait-art" />
      			</figure>
      			<center className="portrait-text">
	      			<span className="portrait-title">BOUTIQUE LAW FIRM</span><br/>
	      			<span>Specializing in Comercial Law & Litigation, Insolvency & Fraud</span>
      			</center>
      		</div>
      		
      </div>
    );
  }
}

export default Portrait;
