import React from "react";

import HeaderImage from "./views/header/HeaderImage";
import AboutMe from "./views/aboutme/AboutMe";
import Navbar from "./views/navbar/Navbar";


const App = () => {

    return (

        <div>
            <HeaderImage>
            </HeaderImage>
            <AboutMe />
            <Navbar />
        </div>
        
    );

};

export default App;