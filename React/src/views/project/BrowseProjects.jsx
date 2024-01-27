import React, { useEffect } from "react";

import dataSet from "../../data/databas/projects.json"

//Noted for all projects

const BrowseProjects = () => {

    var i = 0;
    return (
        <div className="container" id="container-BrowseProjects">
            <div className="title">
                <p>My projects</p>
            </div>
            <div id="container-Projects">
                {dataSet.map((project, i) => 
                    <p className="linkToProject" href={`project/${project.id}`}>
                        <div className="project-container">
                            <div className="title">
                                <p>{project.title}</p>
                            </div>
                            <div className="standardtext">
                                <p>{project.description}</p>
                                <p>{project.time}</p>
                                <p>Link to Github: <a href={`${project.githubLink}`}>{project.githubLink}</a></p>
                                <div className="tags">
                                    {project.tags.map((tag, j) => (
                                        <p className="tag">{tag.name}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </p>
                )}
            </div>
            <div className="scrollFed"/>
        </div>
    );
}

export default BrowseProjects;