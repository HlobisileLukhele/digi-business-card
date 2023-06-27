import React, { Component } from 'react';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';

const fontStyles = {Color: 'red', fontSize: '40px', hover: 'white'};

export class Icons extends Component {
  render() {
    return (
      <div className="social-icons pt-2 py-2 -orange-600 ">
        <SiFacebook style={fontStyles} className="social-icon py-2"/>
        <SiTwitter style={fontStyles} className="social-icon py-2"/>
        <SiInstagram style={fontStyles} className="social-icon py-2"/>
      </div>
    );
  }
}

export default Icons;