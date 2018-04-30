import React from 'react';
import { Switch, Route } from 'react-router-dom' 
import Home from '../views/home/Body'
import AboutUs from '../views/aboutUs/Body'
import Booking from '../views/bookOnline/Body'
import Services from '../views/services/Body'
import ContactUs from '../views/contactUs/Body'
//import Explore from '../views/explore/Body'
//import NotFound from '../views/errors/404'
//<Route path="*" component={NotFound} />
const onChange = () => {
	window.scrollTo(0, 0)
	window.location.reload();
}
export default (
	<Switch>
	  <Route exact path="/" onChange={onChange} component={Home}/>
	  <Route exact path="/about" onChange={onChange} component={AboutUs}/>
	  <Route exact path="/bookwithus" onChange={onChange} component={Booking}/>
	  <Route exact path="/services" onChange={onChange} component={Services}/>
	  <Route exact path="/contactus" onChange={onChange} component={ContactUs}/>
  	</Switch>
  
)