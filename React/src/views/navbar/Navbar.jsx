import React from "react";

import homeIconEmpty from '../../../node_modules/bootstrap-icons/icons/house-door.svg'
import homeIconFill from '../../../node_modules/bootstrap-icons/icons/house-door-fill.svg'

import boxIconEmpty from '../../../node_modules/bootstrap-icons/icons/box.svg'
import boxIconFill from '../../../node_modules/bootstrap-icons/icons/box-fill.svg'

import journal from '../../../node_modules/bootstrap-icons/icons/journals.svg'


const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="box" >
                <img src={homeIconEmpty} alt="Bootstrap" width={50}></img>
                <p>Home</p>
            </div>
            <div className="box">
                <img src={boxIconEmpty} alt="Bootstrap" width={50}></img>
                <p>Project</p>
            </div>
            <div className="box">
                <img src={journal} alt="Bootstrap" width={50}></img>
                <p>Journal</p>
            </div>
        </div>
    );
}

export default Navbar;