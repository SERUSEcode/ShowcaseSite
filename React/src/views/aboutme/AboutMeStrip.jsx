import React from "react";
import contactInfo from "../../data/databas/contact.json"


const AboutMeStrip = () => {

    return (
        <div className="container">
            <div id="WelcomeStrip">
                <h1>Welcome to my project website</h1>
                <p>
                    This site is for you who want a insight of my work and project i have done in the past. If you want to look closer on how I created this webbsite, then please take <a href="https://github.com/SERUSEcode/ShowcaseSite/tree/main">click here</a>. If you have any feedback or want to come to contact with me, please contact me at kevin@ullbrandt.com.
                </p>
            </div>
        </div>
    );
}

export default AboutMeStrip;