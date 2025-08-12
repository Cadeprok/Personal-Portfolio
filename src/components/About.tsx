import React from 'react';

function About() {
    return (
        <div style={{paddingTop:'50px'}} id="about" className="aboutMeContainer">
            <div className='aboutMeContainer'>
                <div className="paragraphToPicturePadding">
                    <h1 className="header">About me</h1>
                    <p style={{lineHeight:'1.25', textAlign:'start'}} className="aboutMeContainerP">
                        I’m a passionate Full Stack Software Engineer with experience building scalable, user-centric web applications from the ground up. Skilled in both frontend and backend technologies, I thrive on turning complex problems into elegant, efficient solutions. With a strong foundation in JavaScript, React, Node.js, and databases like MongoDB and PostgreSQL, I deliver seamless experiences across the entire stack. I enjoy collaborating in agile teams, continuously learning new tools and best practices, and contributing to projects that make a meaningful impact. Whether it’s crafting clean UI components or optimizing server-side logic, I’m driven by a commitment to quality code and user satisfaction.
                    </p>
                </div>
                <div className="pictureToParagraphPadding">
                    <img src="../img/LinkedIN.jpg" alt="Profile" className="aboutImg"  />
                </div>
            </div>
        </div>
    )
}

export default About;