import React from "react";
import { ProjectInfoArray, ProjectInfoType } from "../items/projectsinfo";

function ProjectSection() {
    return <div>
        <div>
            <h1 style={{ fontSize: '48px', textAlign: 'center' }}>
                Projects
            </h1>
        </div>
        <div style={{padding:'0px 60px 0px 60px'}}>
            {ProjectInfoArray.map((project, index) => (
                <div style={{display:'flex', width:'100%'}}>
                        <div style={{width:'25%'}}>
                            <img src={project.img} alt={project.title} style={{width: '175px', height: '175px'}} />
                        </div>
                        <div style = {{width:'50%', }}>
                            <div style={{display:'flex', justifyContent:'start'}}>
                                <h4>
                                    {project.title}
                                </h4>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
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