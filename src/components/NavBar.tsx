import React from 'react';


// Make the a hrefs a loop that contacts an array
function NavBar () {
    return (
        <div>
            <nav style={{display:'flex', justifyContent:'space-between', padding: '5px 20px'    , position:'sticky', top:0, zIndex:1000,  backgroundColor: '#1B2A30'}} className="navFontSize">
                <a href="#home" style={{textDecoration:'none', color:'white'}}>Home</a>
                <a href="#about" style={{textDecoration:'none', color:'white'}}>About</a>
                <a href="#work-experience" style={{textDecoration:'none', color:'white'}}>Work Experience</a>
                <a href="#projects" style={{textDecoration:'none', color:'white'}}>Projects</a>
                <a href="#contact" style={{textDecoration:'none', color:'white'}}>Contact</a>
            </nav>
        </div>
    );
}

export default NavBar;