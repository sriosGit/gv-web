import React, { Component } from 'react';
import { assingValue } from '../../helpers/stateHelper'
//import { listEvents } from '../../helpers/calendarHelper'
import { handleClientLoad } from '../../helpers/googleCalendar'
import macitoMadera from '../../assets/img/Mazo.jpg'
import Schedule from './Schedule'

class Booking extends Component {
	 

	constructor(props) {
        super(props)
        this.state = {
            isMobile: this.props.isMobile || false,
            service: "",
            start: "",
            end: "",
            name: "",
            email: "",
            phone: "",
            comment: "",
            dateConfirmed: false,
            userInfoStep: false,
            confirmationStep: false,
        }
        //this.addEvent = addEvent.bind(this)
		//this.listEvents = listEvents.bind(this)
		handleClientLoad();
    }
    setService(e){
        this.setState({service: e.target.id})
    }
    setDate(start, end){
    	this.setState({start: start, end: end})
    }
    dateConfirm(){
    	this.setState({dateConfirmed: true})
    }
    submitConsult(){
    	const {start, end, name, email, phone, comment, service} = this.state
    	//addEvent(start, end, name, email, phone, comment, service)

    }
    renderServiceBox(title, description){
    	const {isMobile} = this.props
    	return( 
    		<div className="inline service-card">
    			<div className="service-content">
	    			<center className="service-title">{title}</center>
	    			<div style={{padding: "20px 0"}}>1 hr | Consultation Meeting</div>
	    			{isMobile ? null : <span>{description}</span>}
    			</div>
    			<center>
    				<button id={title} onClick={this.setService.bind(this)} className="service-btn">CONTINUAR</button>
    			</center>
    		</div>
    		)
    }
    renderServiceForm(){
    	return(
    		<div>
    		<div style={{margin: "30px 0"}}>
    			{this.renderServiceBox("FAMILY LAW", "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.")}	
				{this.renderServiceBox("FAMILY LAW", "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.")}	
				{this.renderServiceBox("FAMILY LAW", "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.")}	
				{this.renderServiceBox("FAMILY LAW", "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.")}	
    		</div>
    		<div style={{margin: "30px 0 30px 0"}}>
    			{this.renderServiceBox("FAMILY LAW", "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.")}	
				{this.renderServiceBox("FAMILY LAW", "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.")}	
				{this.renderServiceBox("FAMILY LAW", "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.")}	
				{this.renderServiceBox("FAMILY LAW", "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.")}	
    		</div>
    		</div>
    		)
    }
	renderLeftSide(isMobile){
		return(
			<div className="left-area pull-left">
	          	<div className="left-form">
	                <div className="form-title black">
	                    <span className="strong">INGRESA </span>TUS DATOS
	                </div>
	                <div style={{padding: "0px 5px"}} className="text-yellow">Nos comunicaremos con usted lo m&aacute;s pronto posible</div>
	                <div className="form-body">
		                <div className="form-group inline">
		                   	<div className="strong text-yellow">Nombre:</div>
		                    <input onChange={ assingValue.bind(this) } name="name" type="text" className="form-input" placeholder={"Ingresa tu nombre"}/>
		                 </div>
						<div className="form-group inline">
		                    <div className="strong text-yellow">Nro. telef&oacute;nico:</div>
		                    <input onChange={ assingValue.bind(this) } name="phone" type="text" className="form-input" placeholder={"Ingresa tu número telefónico"}/>
		                </div>
		                <div className="form-group">
		                    <div className="strong text-yellow">E-mail:</div>
		                    <input onChange={ assingValue.bind(this) } name="email" type="text" className="form-input" placeholder={"Ingresa tu email"}/>
		                </div>
		                <div className="form-group">
	                    	<span className="strong text-yellow">Comentario:</span>
	                    	<textarea onChange={ assingValue.bind(this) } name="comment"  placeholder={"Ingresa tu situación"}/>
	                    </div>
	                    <div className="form-group submit">
	                    	{isMobile ?<center><button onClick={this.submitConsult.bind(this)}>Submit</button></center> : <button  onClick={this.submitConsult.bind(this)}>Submit</button>}
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
	renderCustomerInfoForm(){
		window.scrollTo(0, 150)
		const {isMobile} = this.props
        return (
            <div className="book-online-container">
          		{this.renderLeftSide(isMobile)}
                {isMobile ? null : this.renderRightSide()}
            </div>
        );
	}
	renderScheduleForm(){
		window.scrollTo(0, 150)
		const {service, start} = this.state
		return(
			<div>
				<Schedule service={service} setDate={this.setDate.bind(this)}/>
				<button onClick={start === "" ? null : this.dateConfirm.bind(this)} className={ start === "" ? "service-btn-off" : "service-btn"}>Continuar</button>
			</div>
			)
	}
	renderConfirmation(){
		return(
			<div>Hello there</div>
			)
	}
    render() {
    	const {isMobile, service, userInfoStep, dateConfirmed} = this.state
        return (
            <div className="full-width">
          		{service === "" ? this.renderServiceForm() : dateConfirmed ? 
          			userInfoStep ? this.renderConfirmation() : this.renderCustomerInfoForm() : this.renderScheduleForm() }
            </div>
        );
    }
}

export default Booking;