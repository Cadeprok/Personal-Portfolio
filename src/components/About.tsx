import React from 'react';

function About() {
    return (
        <div style={{paddingTop:'50px'}} id="about">
            <div className='aboutMeContainer'>
                <div style={{paddingRight:'50px'}}>
                    <h1 className="h2">About me</h1>
                    <p style={{fontSize:'20px', lineHeight:'1.25', textAlign:'start'}} className="aboutMeContainerP">
                        I’m a passionate Full Stack Software Engineer with experience building scalable, user-centric web applications from the ground up. Skilled in both frontend and backend technologies, I thrive on turning complex problems into elegant, efficient solutions. With a strong foundation in JavaScript, React, Node.js, and databases like MongoDB and PostgreSQL, I deliver seamless experiences across the entire stack. I enjoy collaborating in agile teams, continuously learning new tools and best practices, and contributing to projects that make a meaningful impact. Whether it’s crafting clean UI components or optimizing server-side logic, I’m driven by a commitment to quality code and user satisfaction.
                    </p>
                </div>
                <div style={{paddingLeft:'50px'}}>
                    <img src="../img/LinkedIN.jpg" alt="Profile" style={{borderRadius: '50%', width: '500px', height: '500px'}} />
                </div>
            </div>
        </div>
    )
}

export default About;