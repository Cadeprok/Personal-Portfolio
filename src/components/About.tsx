import React from 'react';

function About() {
    return (
        <div style={{paddingTop:'50px'}} id="about" className="aboutMeContainer">
            <div className='aboutMeContainer'>
                <div className="paragraphToPicturePadding">
                    <h1 className="header">About me</h1>
                    <p style={{lineHeight:'1.25', textAlign:'start'}} className="aboutMeContainerP">
                        I’m a Computer Science graduate from Montclair State University (GPA 3.98) with hands-on experience in both IT operations and full-stack development. I’ve resolved 900+ support tickets and managed over 1,200 devices using tools like Intune, Active Directory, and ServiceNow, while also building automation scripts in Python that improved efficiency and reduced costs. As a Software Engineer Intern, I developed scalable applications using React, Next.js, TypeScript, and Python, focusing on performance and user experience. I enjoy solving real-world problems through a mix of system administration, cloud technologies, and software development.
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
