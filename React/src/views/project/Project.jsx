import React from "react";

import dataSet from "../../data/databas/projects.json"

const Project = () => {



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

                <div className="project-container">
                    <div className="title">
                        {project.name}
                    </div>
                    <div className="standardtext">
                        <p>{project.description}</p>
                        <p>{project.time}</p>
                        <p>{project.language}</p>
                        
                    </div>
                    

                </div>
            )}


            <div className="scrollFed">

                

            </div>

        </div>
        

    );
}

export default Project;