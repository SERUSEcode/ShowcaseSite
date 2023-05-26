import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderImage from "./views/header/HeaderImage"; //print imadge with my face and backgrund
import AboutMe from "./views/aboutme/AboutMe"; //print text about me
import Navbar from "./views/navbar/Navbar"; //print menu 
import BrowseProjects from "./views/project/BrowseProjects"; //print project select mobile
import Project from "./views/project/Project"; //print one project
import FrontPage from "./views/StartPage/FrontPage"; //print one project

const App = () => {
    return (
        <div>
            <div className="Mobile">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<>
                            <FrontPage />
                        </> } />
                        <Route exact path="/homePage" element={<>
                            <HeaderImage />
                            <AboutMe />
                            <Navbar />
                        </> } />
                        <Route exact path="/project" element={<>
                            <BrowseProjects />
                            <Navbar />
                        </>} />
                        <Route exact path="/project/:id" element={<>
                            <Project />
                            <Navbar />
                        </> } />
                        <Route exact path="/journal" element={<>
                            <Navbar />
                        </> } />
                        
                    </Routes>
                </BrowserRouter>
                
            </div>

            <div className="PC">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<>
                            <FrontPage />
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