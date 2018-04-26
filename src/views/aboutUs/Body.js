import React, { Component } from 'react';
import Header from '../shared/nav/Header'
import Banner from '../shared/common/Banner'
import Members from './Members'
import ContactUs from '../shared/common/ContactUs'
import BottomBar from '../shared/common/BottomBar'
import '../../assets/css/App.css';
import '../../assets/css/aboutUs.css';
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
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner  title={"About Us"}/>
        <Members/>
        <ContactUs/>
        <BottomBar/>
      </div>
    );
  }
}

export default Body;
