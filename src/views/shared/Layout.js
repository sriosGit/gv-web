import React, { Component } from 'react';
import Header from '../shared/nav/Header'
import BottomBar from '../shared/common/BottomBar'
import ContactUs from '../shared/common/ContactUs'
import '../../assets/css/App.css';
import '../../assets/css/home.css';

class Body extends Component {
//<Portrait isMobile={isMobile}/>
 //       <PracticeAreas isMobile={isMobile}/>
   //     <OurAttorneys isMobile={isMobile}/>
   //
   	constructor(props) {
        super(props)
        this.state = {
            isMobile: window.innerWidth <= 800 || false
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
  	render() {
	  	const {isMobile} = this.state
	    return (
	      <div className="App">
	        <Header isMobile={isMobile}/>
			{this.props.children}
			<ContactUs isMobile={isMobile}/>
	        <BottomBar isMobile={isMobile}/>
	      </div>
	    );
 	}
}

export default Body;
