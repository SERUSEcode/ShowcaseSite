import React from "react";   
import AboutMe from "../aboutme/AboutMe"; 
import BrowseProjects from "../project/BrowseProjects"; 


const Content = () => {

    return (
        <div className="content-container">
            
            <AboutMe /> 
            <BrowseProjects />
        </div>
    );
}

export default Content;