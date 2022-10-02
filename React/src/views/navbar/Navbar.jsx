import React from "react";

import homeIconEmpty from '../../../node_modules/bootstrap-icons/icons/house-door.svg'
import homeIconFill from '../../../node_modules/bootstrap-icons/icons/house-door-fill.svg'

import boxIconEmpty from '../../../node_modules/bootstrap-icons/icons/box.svg'
import boxIconFill from '../../../node_modules/bootstrap-icons/icons/box-fill.svg'

import journal from '../../../node_modules/bootstrap-icons/icons/journals.svg'


const Navbar = () => {

    return (
        <div className="navbar-container">
            <a href="/">
                <div href="/" className="navbar-box" >
                    <img src={homeIconEmpty} alt="Bootstrap" width={40}></img>
                    <p>Home</p>
                </div>
            </a>
            
            <a href="project">
                <div className="navbar-box">
                    <img src={boxIconEmpty} alt="Bootstrap" width={40}></img>
                    <p>Project</p>
                </div>
            </a>

            <a href="journal">
                <div className="navbar-box">
                    <img src={journal} alt="Bootstrap" width={40}></img>
                    <p>Journal</p>
                </div>
            </a>
        </div>
    );
}

export default Navbar;