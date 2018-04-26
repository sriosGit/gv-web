import React, { Component } from 'react';
// ...

export class Banner extends Component {

	render() {
    return (
      	<center className="full-width top-banner">{this.props.title}</center>
    );
  }
}

export default Banner;