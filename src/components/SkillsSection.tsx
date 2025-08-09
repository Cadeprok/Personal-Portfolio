import React from "react";

function SkillsSection() {
    return(
        <div>
            <h2> Skills </h2>
            <div style={{textAlign: 'left', marginLeft: '20%', marginRight: '20%'}}>
                <p>Frontend: React, Next.js, HTML, CSS, JavaScript, TypeScript, TailwindCSS, Bootstrap </p>
                <p>Backend: Node.js, Express.js, SQL, FastAPI, Flask </p>
                <p>Other: Git, GitHub, Docker, Figma, AWS, Bash </p>
            </div>
        </div>
    )

}

export { SkillsSection };