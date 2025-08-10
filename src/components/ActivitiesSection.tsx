import React from "react";
import { ActivityInfoArray } from "../items/activitiesinfo";


export default function ActivitiesSection() {
    return <div>
        <h1 style={{fontSize:'48px'}}>Activities</h1>
        <div style={{padding:'0px 60px 0px 60px'}}>
            {ActivityInfoArray.map((activity, index) => (
                <div style={{display:'flex', width:'100%'}}>
                        <div style={{width:'25%'}}>
                            <img src="../img/LinkedIN.jpg" style={{height:'175px', width:'175px'}}/>
                        </div>
                        <div style = {{width:'50%'}}>
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