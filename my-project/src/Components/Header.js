import React from 'react'
import Headshot from "./src/images/head-shot"

export default function Header () {
    return (
        <div>
            <div className="container">
                <img src={"../images/head-shot.png"} alt="smile" />
                <h1>Hlobisile Lukhele</h1>
                <h3>Fronted Developer</h3>
                <a href='www.hlobisile-lukhele-portfolio-netlify.app' rel="noreferrer"></a>
            </div>
        </div>
    )
}