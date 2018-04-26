import React, { Component } from 'react';
import Header from '../shared/nav/Header'
import Banner from '../shared/common/Banner'
import ContactUs from '../shared/common/ContactUs'
import ServiceAreas from './ServiceAreas'
import BottomBar from '../shared/common/BottomBar'
import '../../assets/css/App.css';
import '../../assets/css/home.css';
import '../../assets/css/services.css';
class Body extends Component {

	constructor(props) {
        super(props)
        this.state = {
            isMobile: false
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

	renderBlueAbout(){
		return(
			<div className="blueBG">
				<div className="container">
					<div className="strong about-title">About the Service</div>
					<p>It kills me not to know this, but I've all but just forgotten What the color of her eyes were, and her scars or how she got them
						As the telling signs of age rain down, a single tear is dropping
						Through the valleys of an aging face, that this world has forgotten
						There is no reconciliation that will put me in my place
						And there is no time like the present, to drink these draining seconds
						But seldom do these words ring true, when I'm constantly failing you
						Like walls that we just can't break through, until we disappear
					</p>
					<p>
						So tell me now If this ain't love then how do we get out? Because I don't know
						That's when she said I don't hate you boy
						I just want to save you while there's still something left to save
						That's when I told her I love you girl
						But I'm not the answer for the questions that you still have, whoa, whoa
						And the day pressed on like crushing weights
						For no man does it ever wait
						Like memories of dying days
						That deafen us like hurricanes
						Bathed in flames we held the brand
						Uncurled the fingers in your hand
						Pressed into the flesh like sand
						Now do you understand?
						So tell me now
						If this ain't love then how do we get out?
						Because I don't know
						That's when she said I don't hate you boy
						I just want to save you while there's still something left to save
						That's when I told her I love you girl
						But I'm not the answer for the questions that you still have, whoa, whoa
						One thousand miles away
						There's nothing left to say
						But so much left that I don't know
						We never had a choice
						This world is too much noise
						It takes me under
						It takes me under once again
						I don't hate you
						I don't hate you no
						So tell me now
						If this ain't love then how do we get out?
						Because I don't know
						That's when she said I don't hate you boy
						I just want to save you while there's still something left to save
						That's when I told her I love you girl
						But I'm not the answer for the questions that you still have, whoa, whoa
					</p>
					<p>
						It kills me not to know this, but I've all but just forgotten
						What the color of her eyes were, and her scars or how she got them
						As the telling signs of age rain down, a single tear is dropping
						Through the valleys of an aging face, that this world has forgotten
						There is no reconciliation that will put me in my place
						And there is no time like the present, to drink these draining seconds
						But seldom do these words ring true, when I'm constantly failing you
						Like walls that we just can't break through, until we disappear
						So tell me now
						If this ain't love then how do we get out?
						Because I don't know
						That's when she said I don't hate you boy
						I just want to save you while there's still something left to save
					</p>
				</div>
			</div>

			)
	}

  	render() {
    	return (
      	<div className="App">
        	<Header/>
        	<Banner  title={"About Us"}/>
        	<ServiceAreas/>
        	{this.renderBlueAbout()}
        	<ContactUs/>
        	<BottomBar/>
      	</div>
    	);
  	}
}

export default Body;
