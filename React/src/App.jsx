import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HeaderImage from "./views/header/HeaderImage"; //print imadge with my face and backgrund
import AboutMe from "./views/aboutme/AboutMe"; //print text about me
import Navbar from "./views/navbar/Navbar"; //print menu 
import BrowseProjects from "./views/project/BrowseProjects"; //print project select
import Project from "./views/project/Project"; //print one project



const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<>
                        <HeaderImage />
                        <AboutMe />
                    </> } />
                    <Route exact path="/project" element={
                        <BrowseProjects />
                     } />
                    <Route exact path="/project/:id" element={<>
                        <Project />
                    </> } />
                    
                </Routes>
            </BrowserRouter>
            <Navbar />

        </div>
    );

};

export default App;