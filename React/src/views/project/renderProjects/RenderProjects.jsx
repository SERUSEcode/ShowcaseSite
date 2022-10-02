import React from "react";

import dataSet from "../../../data/databas/projects.json"
import Project from "../Project";


const renderProject = () => {

    console.log(dataSet);

    return (
        <div>
            {dataSet.map((project, i) => <li>{project.id}</li>)}
        </div>
    );
}

export default renderProject;