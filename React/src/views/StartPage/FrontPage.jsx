import React from "react";


const FrontPage = () => {

    return (
        <div className="centered-div">
            <div className="TestColor">
                <p id="myName" className="text">Kevin Ullbrandt</p>
                
                <p id="myRole" className="text">SOFTWARE DEVELOPER</p>
                
                {/* <a href="/homePage">
                    <button class="custom-button">Click me</button>
                </a> */}
                <a href="/homePage">
                    <div class="arrow"></div>
                </a>
            </div>
            
        </div>
    );
}

export default FrontPage;