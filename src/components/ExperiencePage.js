import React from "react";
import experienceImage from '../images/ExperienceTimeline.png';
import "./ExperiencePage.css"; 

export default function ExperiencePage() {
  return (
    
    <section id="experience"
      className="background-experience d-flex flex-column justify-content-center align-items-center text-white"
      style={{ height: '100vh'}}
    >
        <div
            className="projects-header w-100 d-flex align-items-center justify-content-end"
            style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '1rem 20px',
            paddingTop: '1rem',
            backgroundColor: 'transparent',
            }}
        >
            <div className="d-flex gap-3" style={{ fontFamily: 'Courier New, monospace' }}>
                <a href="#main" className="btn btn-outline-dark">Home</a>
                <a href="#projects" className="btn btn-outline-dark">Projects</a>
                <a href="#contact" className="btn btn-outline-dark">About Me</a>
            </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center p-4" style={{ paddingTop: '60px' }}>
            <h1 className="typed-text">
                Experience
            </h1>
            <img style={{ maxWidth: '1100px', width: '100%' }} src={experienceImage} alt="Work experience" />
        </div>


    </section>
  );
}
