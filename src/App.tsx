import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import ProjectSection from './components/ProjectSection';
import { SkillsSection } from './components/SkillsSection';
import Divider from './components/divider';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#1B2A30', color:'white', height: '100%'}}>
      <section id="home">
        <NavBar />
      </section>
      <section id="about">
        <About />
      </section>
      <Divider />
      <section id="work-experience">
        <WorkExperience />
      </section>
      <Divider />
      <section id = "projects">
        <ProjectSection />
      </section>
      <Divider />
      <section id='skills'>
        <SkillsSection />
      </section>
    </div>
  );
}

export default App;
