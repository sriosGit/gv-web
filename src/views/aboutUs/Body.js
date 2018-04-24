import React, { Component } from 'react';
import Header from '../shared/nav/Header'
import Banner from '../shared/common/Banner'
import Members from './Members'
import ContactUs from '../shared/common/ContactUs'
import BottomBar from '../shared/common/BottomBar'
import '../../assets/css/App.css';
import '../../assets/css/aboutUs.css';
class Body extends Component {
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
