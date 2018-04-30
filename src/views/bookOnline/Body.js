import React, { Component } from 'react';
import Header from '../shared/nav/Header'
import Banner from '../shared/common/Banner'
import Booking from './Booking'
import BottomBar from '../shared/common/BottomBar'
import '../../assets/css/App.css';
import '../../assets/css/home.css';
import '../../assets/css/bookOnline.css';

class Body extends Component {
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
    const isMobile = window.innerWidth < 800
    return (
      <div className="App">
        <Banner title={"BOOKING ONLINE"}/>
        <Booking isMobile={isMobile}/>
      </div>
    );
  }
}

export default Body;
