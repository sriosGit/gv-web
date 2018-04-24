import React, { Component } from 'react';

class PracticeAreas extends Component {

    renderPractice(title, text){
        return(
            <div className="practice-area">
                <div className="area-square pull-left"><i className="fas fa-square-full"></i></div>
                <div>
                    <div className="area-title">{title}</div>
                    <div className="area-text">{text}</div>
                </div>
            </div>
        );
    }


    render() {
        return (
            <div className="full-width practice-area-container">
          		<div className="left-area pull-left">
                    <div className="inner-text">
                        <div className="strong">PRACTICE</div>
                        <div>AREAS</div>
                    </div>
          		</div>
                <div className="right-area pull-right">
                <center>
                    <div className="inline">
                        {this.renderPractice("PRACTICA 1", "Esta es la descripcion para la primera area")}
                        {this.renderPractice("PRACTICA 2", "Esta es la descripcion para la segunda area")}
                    </div>
                    <div className="inline">
                        {this.renderPractice("PRACTICA 3", "Esta es la descripcion para la tercera area")}
                        {this.renderPractice("PRACTICA 4", "Esta es la descripcion para la cuarta area")}
                    </div>
                </center>
                </div>
            </div>
        );
    }
}

export default PracticeAreas;
