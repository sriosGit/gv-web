import React, { Component } from 'react';
import Loading from 'react-simple-loading';
import Banner from '../shared/common/Banner'
import Booking from './Booking'
import { handleClientLoad } from '../../helpers/googleCalendar'
import '../../assets/css/App.css';
import '../../assets/css/home.css';
import '../../assets/css/bookOnline.css';
class Body extends Component {
  constructor(props) {
        super(props)
        this.state = {
            isMobile: window.innerWidth <= 800 || false,
            gapiLoaded: false
        }
        this.handleClientLoad = handleClientLoad.bind(this);
    }
    componentWillMount = () => {
        this.updateDimensions()
        this.handleClientLoad()
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
    const {gapiLoaded} = this.state
    return (
      <div className="App">
        <Banner title={"BOOKING ONLINE"}/>
        {gapiLoaded ? <Booking gapiLoaded={gapiLoaded} isMobile={isMobile}/> : <div className="book-online-container">
        <Loading  color={'#ffcd00'}
                  stroke={'10px'}
                  size={'100px'}
        /></div> }
      </div>
    );
  }
}

export default Body;
