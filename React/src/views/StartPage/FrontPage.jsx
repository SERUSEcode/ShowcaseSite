import React from "react";
import { useRef } from "react";
import BrowseProjects from '../project/BrowseProjects';

// NOTE : Used for start screen

const FrontPage = () => {
    const BrowseProjectsRef = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',

        });
    };
    return (
        <div id="centered-div">
            <div>
                <p id="myName" className="starttitletext">Kevin Ullbrandt</p>
                
                <p id="myRole" className="starttitletext">SOFTWARE DEVELOPER</p>

                <a  href="#content-container">
                    <div className="arrow" id="down-btn"></div>
                </a>
            </div>
        </div>
    );
}

export default FrontPage;