import React, { Component } from 'react';

class OurAttorneys extends Component {

    renderProfile(img, name, position, tel, web){
        return(
            <div className="attorney-profile-container inline">
                <div className="at-img"></div>
                <center>
                    <div className="at-name">{name}</div>
                    <div className="at-pos">{position}</div>
                </center>
                <hr className="orange-line"/>
                <center>
                    <div className="at-phone">{tel}</div>
                    <div className="at-web">{web}</div>
                </center>
            </div>
            

        );
    }


    render() {
        return (
            <div className="full-width our-attorneys-container">
            <div className="our-attorneys-title"><span className="strong">OUR</span> ATTORNEYS</div>
          		{this.renderProfile("","JHON SMITH", "PARTNER", "Tel: 123-456-7890", "info@mysite.com")}
                {this.renderProfile("","JHON SMITH", "PARTNER", "Tel: 123-456-7890", "info@mysite.com")}
                {this.renderProfile("","JHON SMITH", "PARTNER", "Tel: 123-456-7890", "info@mysite.com")}
            </div>
        );
    }
}

export default OurAttorneys;
