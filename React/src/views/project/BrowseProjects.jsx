import React from "react";

import dataSet from "../../data/databas/projects.json"
import { BrowseProjectsRef } from '../StartPage/FrontPage';


const BrowseProjects = () => {
    return (
        <div className="container" id="container-BrowseProjects">
            <div className="title">
                <h1>My projects</h1>
            </div>

            {dataSet.map((project, i) => 
                <a className="linkToProject" href={`project/${project.id}`}>
                    <div className="project-container">
                        <div className="title">
                            <p>{project.name}</p>
                        </div>
                        <div className="standardtext">
                            <p>{project.description}</p>
                            <p>{project.time}</p>
                            <p>{project.language}</p>
                        </div>
                    </div>
                </a>
            )}
            <div className="scrollFed"/>
        </div>
    );
}

export default BrowseProjects;