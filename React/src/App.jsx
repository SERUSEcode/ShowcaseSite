import React from "react";

import HeaderImage from "./views/header/HeaderImage";
import AboutMe from "./views/aboutme/AboutMe";


const App = () => {

    return (

        <div>
            <HeaderImage>
                <h1>Hallå där världen</h1>
            </HeaderImage>
            <AboutMe />
        </div>
        
    );

};

export default App;