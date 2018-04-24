import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
// ...

export class GMap extends Component {

	render() {
		const style = {
  			width: this.props.width || 360,
  			height: this.props.height || 320,
  			position: 'relative'
		}
		const containerStyle = {position: 'relative', width: '100%', height:'100%'}
    return (
      	<Map google={this.props.google} zoom={this.props.zoom || 14}
      		style={style}
      		containerStyle={containerStyle}
      		initialCenter={this.props.coords || {lat: 40.854885, lng: -88.081807}}
        >

        <Marker title={this.props.title || "Marker"}
    		name={this.props.name || ""}
    		position={ this.props.coords || {lat: 40.854885, lng: -88.081807}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAqYmy2Vl_C2HiqFbzm_ht6VSzqP9R2ar8")
})(GMap)