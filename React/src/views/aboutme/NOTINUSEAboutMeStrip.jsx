import React from "react";
import contactInfo from "../../data/databas/contact.json"


const AboutMeStrip = () => {

    return (
        <div className="container">
            <div id="WelcomeStrip">
                <h1>Welcome to my project website</h1>
                <p>
                    This site is for you who want a insight of my work and project i have done in the past. 
                </p>
                <p>
                    You can take a closer look on how I created this webbsite <a href="https://github.com/SERUSEcode/ShowcaseSite/tree/main">by cliking here</a>. 
                </p>
            </div>
        </div>
    );
}

export default AboutMeStrip;