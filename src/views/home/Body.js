import React, { Component } from 'react';
import Header from '../shared/nav/Header'
import Portrait from './Portrait'
import PracticeAreas from './PracticeAreas'
import OurAttorneys from './OurAttorneys'
import ContactUs from '../shared/common/ContactUs'
import BottomBar from '../shared/common/BottomBar'
import '../../assets/css/App.css';
import '../../assets/css/home.css';

class Body extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Portrait/>
        <PracticeAreas/>
        <OurAttorneys/>
        <ContactUs/>
        <BottomBar/>
      </div>
    );
  }
}

export default Body;
