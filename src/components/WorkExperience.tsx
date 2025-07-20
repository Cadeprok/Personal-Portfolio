import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import { WorkExperienceArray } from "../items/workinfo"; 

function WorkExperience() {

    return (
        <div style={{ paddingTop: '0px' }} id="work-experience">
            <div>
                <h1 style={{ fontSize: '48px', textAlign: 'center' }}>
                    Work Experience
                </h1>
            </div>
            <div style={{padding:'0px 60px 0px 60px'}}>
                {
                    WorkExperienceArray.map((work, index) => (
                        <WorkExperienceCard
                            key={index}
                            title={work.title}
                            company={work.company}
                            duration={work.duration}
                            bulletpoints={work.bulletpoints}
                            img={work.img}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default WorkExperience;