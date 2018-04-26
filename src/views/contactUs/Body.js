import React, { Component } from 'react';
import Header from '../shared/nav/Header'
import Banner from '../shared/common/Banner'
import ContactUs from '../shared/common/ContactUs'
import GMap from '../shared/common/Map'
import BottomBar from '../shared/common/BottomBar'
import '../../assets/css/App.css';
import '../../assets/css/home.css';
import '../../assets/css/contactUs.css';
class Body extends Component {
	constructor(props) {
        super(props)
        this.state = {
            isMobile: false
        }
        
    }
 	componentWillMount = () => {
      	this.updateDimensions()
      	console.log("back to home")
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
	renderMap(){
		return(
				<center>
					<div className="map-container-contact">
	                	<GMap cords={{lat: 40.854885, lng: -88.081807}} zoom={10} width={940} height={340} title={"Gamarra Vaisman & Associates"} name="Av. Alfredo Mosser 123"/>
	                </div>
				</center>
			)
	}

  	render() {
    	return (
      	<div className="App">
        	<Header/>
        	<Banner  title={"Contact Us"}/>
        	{this.renderMap()}
        	<ContactUs/>
        	<BottomBar/>
      	</div>
    	);
  	}
}

export default Body;
