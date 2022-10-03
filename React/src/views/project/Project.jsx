import React, { Component } from "react";
import { useLocation, useParams } from 'react-router-dom'
import dataSet from "../../data/databas/projects.json"

const Project = () => {


    const params = useParams();
    //selectProject
    const selProject = Object.values(dataSet).find(e => e.id == params.id);

    return (

        <div className="container">
            <div className="title">
                <p>{selProject.name}</p>
            </div>
            <div className="standardtext">

                
                <h3>Description</h3>
                <p>{selProject.detailedDescription}</p>

                <h3>Videos</h3>
                <p>{selProject.video.text}</p>
                <p>{selProject.video.url}</p>

                <h3>Links</h3>
                <p>
                    Link till github: 
                    <a href="selProject.github">{selProject.github.url}</a>
                </p>

            </div>
            
        </div>
    );
}

export default Project;