import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#1B2A30', color:'white', height: '100%'}}>
      <section id="home">
        <NavBar />
      </section>
      <section id="about">
        <About />
      </section>
        <div style={{
          width: '80%',
          height: '2px',
          backgroundColor: 'white',
          margin: '32px auto'
        }} />
      <section id="work-experience">
        <WorkExperience />
      </section>
        <div style={{
          width: '80%',
          height: '2px',
          backgroundColor: 'white',
          margin: '32px auto'
        }} />
      <section id = "projects">
        <ProjectSection />
      </section>
    </div>
  );
}

export default App;
