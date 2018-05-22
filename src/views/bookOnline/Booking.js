import React, { Component } from 'react';
import { assingValue } from '../../helpers/stateHelper'
//import { listEvents } from '../../helpers/calendarHelper'
import { getEventList, isClientLoaded, addEvent } from '../../helpers/googleCalendar'
import { FormattedDate, FormattedTime } from 'react-intl';
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
            gapiLoaded: this.props.gapiLoaded,
            dateConfirmed: false,
            userInfoStep: false,
            events: []
        }
        this.addEvent = addEvent.bind(this)
		//this.listEvents = listEvents.bind(this)

		// THIS CALL GOOGLE API !!!
		// ASDFLLDGDLJGDLDGLKGLKGLKG
		//console.log(events)
    }
    componentWillMount(){
    	if (this.state.gapiLoaded){
    		this.setState({events: getEventList()})
    	}

    }
    componentWillUpdate(){
    	if (isClientLoaded() && !this.state.gapiLoaded){
    		this.setState({gapiLoaded: true}, () => {
    			//console.log(this.state.gapiLoaded)
    			this.setState({events: getEventList()})
    	})
    		
    	}
    //	this.setState({events: global.gapi.client.calendar.events})

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
    	this.addEvent(service, comment ,start, end, name, email, phone)
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
	                </div>
	          	</div>
          	</div>
			)
	}
	renderRightSide(){
		const {service, start, end, name, isMobile} = this.state

		return(
			<div className="right-area pull-right">
           		<div className="right-details">
           			<div className="inline service-card">
    					<div className="summary-content">
	    					<center className="service-title">{service}</center>
	    					<center style={{padding: "5px 0 0 0"}}>1 hr | Cita de Consulta</center>
    					</div>
    					<hr/>
    					<center><FormattedDate value={start} day="numeric" month="long" year="numeric"/> | <FormattedTime value={start}/></center>
    					<center className="form-group submit">
    						{isMobile ?<center><button onClick={this.submitConsult.bind(this)}>Submit</button></center> : <button  onClick={this.submitConsult.bind(this)}>Submit</button>}
    					</center>
    				</div>
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
		const {service, start, events} = this.state
		return(
			<div>
				<Schedule events={events} service={service} setDate={this.setDate.bind(this)}/>
				<button onClick={start === "" ? null : this.dateConfirm.bind(this)} className={ start === "" ? "service-btn-off" : "service-btn"}>Continuar</button>
			</div>
			)
	}
	renderConfirmation(){
		const {name, start, end} = this.state
		return(
			<div className="confirmation-container">
				<div className="confirmation-message">
					<div className="confirmation-title">Gracias por su confianza, {this.state.name.split(' ')[0]}</div>
					<div className="confirmation-subtitle">Nos comunicaremos con usted lo más pronto posible</div>
					<br/>
					<div className="confirmation-subtitle black">Su cita ha sido reservada para la siguiente fecha: <br/> <FormattedDate value={start} day="numeric" month="long" year="numeric"/> | <FormattedTime value={start}/> - <FormattedTime value={end}/></div>
					<br/>
					<br/>
					<div className="confirmation-back">Haga click <a href="/" className="confirmation-link">aqu&iacute;</a> para volver al inicio</div>
				</div>
				<div className="right-area pull-right">
           		<div className="right-details">
           			<img className="img-mazo" src={macitoMadera}/>
	            </div>	 	
            	</div>
			</div>
			)
	}
    render() {
    	//console.log(getEventList())
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