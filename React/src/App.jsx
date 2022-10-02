import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HeaderImage from "./views/header/HeaderImage";
import AboutMe from "./views/aboutme/AboutMe";
import Navbar from "./views/navbar/Navbar";
import Project from "./views/project/Project";



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
                        <Project />
                     } />
                    
                </Routes>
            </BrowserRouter>
            <Navbar />

        </div>
    );

};

export default App;