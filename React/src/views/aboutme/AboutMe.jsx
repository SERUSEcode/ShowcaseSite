import React from "react";
import contactInfo from "../../data/databas/contact.json"


const AboutMe = () => {

    return (
        <div className="aboutme">
            <p className="title">
                Kevin Ullbrandt
                <br></br>
                {contactInfo[0].title}
            </p>
            <p className="standardtext">
                Maecenas posuere, ex et tincidunt hendrerit, 
                lectus ipsum lacinia dolor, 
                eget commodo purus sem vitae turpis. 
                Ut tristique mi et convallis imperdiet. 
                Morbi volutpat quam et 
            </p>
            <p className="title">
                Contact
            </p>
            <p className="standardtext">
                
                Phone: {contactInfo[0].phone}
                <br /><br />
                E-mail: {contactInfo[0].email}
                <br /><br />
                LinkedIn: {contactInfo[0].linkedin}
            </p>
        </div>
    );
}

export default AboutMe;