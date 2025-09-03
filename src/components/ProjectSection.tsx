import React from "react";
import { ProjectInfoArray } from "../items/projectsinfo";

function ProjectSection() {
    return <div>
        <div>
            <h1 style={{ textAlign: 'center' }} className="header">
                Projects
            </h1>
        </div>
        <div style={{padding:'0px 60px 0px 60px'}}>
            {ProjectInfoArray.map((project, index) => (
                <div className="projectCard">
                        <div className="projectImgContainer">
                            <img src={project.img} alt={project.title} className="projectImgStyling"/>
                        </div>
                        <div className="projectTitleContainer">
                            <div className="projectTitle">
                                <h4>
                                    {project.title}
                                </h4>
                            </div>
                            <div className="projectInfo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <p style={{ margin: 0 }}>
                                    {project.description}
                                </p>
                                <p style={{ margin: 0, paddingTop:'12px' }}>
                                    <b>Tech Stack: </b> {project.techStack || 'N/A'}
                                </p>
                            </div>
                        </div>
                    </div>
            ))}

        </div>
    </div>
}


export default ProjectSection;