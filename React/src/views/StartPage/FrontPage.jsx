import React from "react";
import { useRef } from "react";
import BrowseProjects from '../project/BrowseProjects';


const FrontPage = () => {
    const BrowseProjectsRef = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',

        });
    };
    return (
        <div className="centered-div">
            <div  className="TestColor">
                <p id="myName" className="text">Kevin Ullbrandt</p>
                
                <p id="myRole" className="text">SOFTWARE DEVELOPER</p>
                
                {/* <a href="/homePage">
                    <button class="custom-button">Click me</button>
                </a> href="/homePage"*/}
                <a  href="#container-BrowseProjects">
                    <div className="arrow" id="down-btn"></div>
                </a>
            </div>
            {/* <div ref={BrowseProjectsRef} id="track" /> */}
        </div>
    );
}

export default FrontPage;