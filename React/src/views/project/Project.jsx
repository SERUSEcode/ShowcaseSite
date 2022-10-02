import React from "react";
import { useLocation, useParams } from 'react-router-dom'


const Project = () => {


    const params = useParams();
    return (

        <div className="container">
            <h1>{params.id}</h1>
            
        </div>
    );
}

export default Project;