import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderImage from "./views/header/HeaderImage"; //print imadge with my face and backgrund
import AboutMe from "./views/aboutme/AboutMe"; //print text about me
import Navbar from "./views/navbar/Navbar"; //print menu 
import BrowseProjects from "./views/project/BrowseProjects"; //print project select mobile
import Project from "./views/project/Project"; //print one project
import StartPage from "./views/StartPage/StartPage"; //print one project

const App = () => {
    return (
        <div>
            <div className="Mobile">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/homePage" element={<>
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

            <div className="PC">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<>
                            <StartPage />
                        </> } />
                        <Route exact path="/homePage" element={<>
                            <HeaderImage />
                            <AboutMe />
                            <BrowseProjects />
                        </> } />
                        <Route exact path="/project" element={
                            <BrowseProjects />
                        } />
                        <Route exact path="/project/:id" element={<>
                            <Project />
                            <Navbar />
                        </> } />
                        
                    </Routes>
                </BrowserRouter>
                
            </div>
        </div>
    );
};

export default App;