import React from "react";
import { workExperienceType } from "../items/workinfo"; 

function WorkExperienceCard(work : workExperienceType) {
    return <div style={{display:'flex', width:'100%', height:'250px'}}>
        <div style={{width:'25%', paddingTop:'20px'}}>
            <img src={work.img} alt={work.title} style={{width: '175px', height: '175px'}} />
        </div>
        <div style = {{width:'50%'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h4>
                    {work.title} - {work.company}
                </h4>
                <h4>
                    {work.duration}
                </h4>
            </div>
            <div>
                <ul style={{paddingLeft:'auto', margin: '0px', listStyleType: 'disc'}}>
                    {work.bulletpoints.map((point, index) => (
                        <li key={index} style={{fontSize:'16px', lineHeight:'1.5', textAlign: 'left', alignItems: 'flex-start', display: 'list-item'}}>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
}

export default WorkExperienceCard;