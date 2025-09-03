import React from "react";
import { ActivityInfoArray } from "../items/activitiesinfo";


export default function ActivitiesSection() {
    return <div>
        <h1 className="header">Activities</h1>
        <div style={{padding:'0px 60px 0px 60px'}}>
            {ActivityInfoArray.map((activity, index) => (
                <div className="activityContainer">
                        <div className="activitiesImg">
                            <img src={activity.img} alt={"activity_" + index} style={{height:'175px', width:'175px'}}/>
                        </div>
                        <div className="activitiesContent">
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <h4>
                                    {activity.title}
                                </h4>
                                <h4>
                                    {activity.dates}
                                </h4>
                            </div>
                            <div>
                                <p style={{textAlign:'start'}}>
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    </div>

}