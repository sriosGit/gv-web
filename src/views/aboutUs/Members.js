import React, { Component } from 'react';

class OurAttorneys extends Component {

    renderAbout(img, name, position, tel, web, isLeft = false){
        return(
            <div className="attorney-about-container inline">
                <div className="at-img inline"></div>
                <div className={isLeft ? "at-about-left inline" : "at-about-right inline"}>
                    <div className="at-about-name">{name}</div>
                    <div className="at-about-pos">{position}</div>
                    <p>Just another text of another website of another day of work, struggling to make the css style 
                    obbey as the commander of all style, my name is Harris Louis of Vilcabamba and this text will repeat two times.Just another text of another website of another day of work, struggling to make the css style 
                    obbey as the commander of all style, my name is Harris Louis of Vilcabamba and this text will repeat two times.</p>
                    <p>
                    	<strong>M:</strong>+123-354-567<br/>
                    	<strong>E:</strong>admin@website.com
                    </p>
                </div>
                <hr/>
            </div>
            

        );
    }


    render() {
        return (
            <div className="full-width about-us-container">
            <div className="our-attorneys-title"><span className="strong">NUESTRO</span> EQUIPO </div>
          		{this.renderAbout("","CECILIA GAMARRA VAISMAN", "SOCIO", "Tel: 999-265-059", "cecilia@gvaisman.com", false)}
                {this.renderAbout("","MARTIN MENDOZA", "SOCIO", "Tel: 123-456-7890", "martin@cgvaisman.com", true)}
            </div>
        );
    }
}

export default OurAttorneys;
