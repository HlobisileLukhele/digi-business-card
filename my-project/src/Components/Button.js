import React from 'react'
import {SiLinkedin,SiGithub } from 'react-icons/si';


const fontStyles = {color: 'black', fontSize: '22px', paddingRight: '5px'};

function Button() {

  return (
    <div className="social-buttons ">
        
       <button className="bg-blue-500 hover:bg-blue-600 font-size:20px text-black font-bold py-2 px-4 rounded">
       <SiLinkedin style={fontStyles} className="icons-buttons"/>
       LinkedIN
       </button>

       <button className="bg-white text-black hover:bg-white font-bold py-2 px-4 rounded">
       <SiGithub style={fontStyles} className="icons-buttons" />
         Github
       </button>

    </div>
  )
}

export default Button

