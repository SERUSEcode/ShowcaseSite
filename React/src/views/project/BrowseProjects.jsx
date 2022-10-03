import React from "react";

import dataSet from "../../data/databas/projects.json"

const BrowseProjects = () => {

    return (
        <div className="container">
            <div className="title">
            <p>My projects</p>

            </div>
            <div className="standardtext">
                <p>
                    Här kan du kolla igenom alla mina 
                    projekt som jag har gjort under 
                    skolgången eller under min fritid. 
                    Klicka på korten för att veta mera
                </p>
            </div>

            {/* <input className="searchBar" value={"search"}></input> */}

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

            <div className="scrollFed"></div>

        </div>
    );
}

export default BrowseProjects;