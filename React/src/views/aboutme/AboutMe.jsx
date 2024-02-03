import React from "react";
import contactInfo from "../../data/databas/contact.json"


const AboutMe = () => {

    return (
        <div id="aboutme">
            <p className="title"> ABOUT ME </p>
            <p className="standardtext">
            Welcome to my website! 
            </p>
            <br></br>
            <p className="standardtext">
            My name is Kevin and I am software developer born in Linköping Sweden, currently based in Malta. 
            </p>
            <br></br>
            <p className="standardtext">
            My area of specialisation is in web development- I pursued my education at Jonköping University and obtained my degree in 2023. 
            </p>
            <br></br>
            <p className="standardtext">
            I love nature, adventuring and learning new skills. 
            </p>

            

        </div>
    );
}

export default AboutMe;