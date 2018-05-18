import React from 'react';
import { Switch, Router, Route } from 'react-router-dom' 
import Home from '../views/home/Body'
import AboutUs from '../views/aboutUs/Body'
import Booking from '../views/bookOnline/Body'
import Services from '../views/services/Body'
import ContactUs from '../views/contactUs/Body'
import BasicLayout from '../views/shared/Layout'
const onChange = () => {
	window.scrollTo(0, 0)
	window.location.reload();
}


/*
  Layouts, inline define here for demo purpose
  you may want to define in another file instead
 */

const HomeRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <BasicLayout children={<Component {...matchProps} />} />
    )} />
  )
};
export default (
	<Switch>
	  <HomeRoute exact path="/" onChange={onChange} component={Home}/>
	  <HomeRoute exact path="/about" onChange={onChange} component={AboutUs}/>
	  <HomeRoute exact path="/bookwithus" onChange={onChange} component={Booking}/>
	  <HomeRoute exact path="/services" onChange={onChange} component={Services}/>
	  <HomeRoute exact path="/contactus" onChange={onChange} component={ContactUs}/>
  	</Switch>  
)