import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";


import Content from "./views/content/Content"; //print text about me
// import AboutMeStrip from "./views/aboutme/AboutMeStrip"; //print text about me
// import Navbar from "./views/navbar/Navbar"; //print menu 
import AboutMe from "./views/aboutme/AboutMe"; 
import BrowseProjects from "./views/project/BrowseProjects"; 
// import Project from "./views/project/Project"; //print one project
import FrontPage from "./views/StartPage/FrontPage"; //print one project
import Content from "./views/content/Content";

const App = () => {
    return (
        <div className="PC">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<>
                        <FrontPage />
                        <Content />  
                    </> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};


export default App;