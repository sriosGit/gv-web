import React, { Component } from 'react';
// ...

export class Banner extends Component {

	render() {
    return (
      	<center class="full-width top-banner">{this.props.title}</center>
    );
  }
}

export default Banner;