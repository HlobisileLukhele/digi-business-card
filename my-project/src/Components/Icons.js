import React, { Component } from 'react';
import { SiFacebook, SiTwitter, SiGithub } from 'react-icons/si';

const fontStyles = {color: 'white', fontSize: '40px'};

export class Icons extends Component {
  render() {
    return (
      <div className="social-icons">
        <SiFacebook style={fontStyles}/>
        <SiTwitter style={fontStyles}/>
        <SiGithub style={fontStyles}/>
      </div>
    );
  }
}

export default Icons;