import React, { Component } from 'react';
import Header from '../shared/nav/Header'
import Banner from '../shared/common/Banner'
import Booking from './Booking'
import BottomBar from '../shared/common/BottomBar'
import '../../assets/css/App.css';
import '../../assets/css/home.css';
import '../../assets/css/bookOnline.css';

class Body extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner title={"Book Online"}/>
        <Booking/>
        <BottomBar/>
      </div>
    );
  }
}

export default Body;
