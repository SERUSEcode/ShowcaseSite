import React, { useEffect } from "react";

import dataSet from "../../data/databas/projects.json"

async function GetRepositorys() {
    const response = await fetch(`https://api.github.com/users/SERUSEcode/starred`);
    let data = await response.json();
    console.log(data);
    
    return data;
}


const BrowseProjects = () => {

    // useEffect(() => {
    //     // declare the data fetching function
    //     const fetchData = async () => {
    //         const response = await fetch('https://api.github.com/users/SERUSEcode/starred');
    //         const data = await response.json();
    //         setData(data);
          
    //     }


    //     const result = fetchData()

    //     console.log(result);
    // });

    


    return (
        <div className="container" id="container-BrowseProjects">
            <div className="title">
                <h1>My projects</h1>
                {/* <p>{data[0].name}</p> */}
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
                                <p>{project.language}</p>
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