import React from "react";
import "./ProjectsPage.css";
import lorenzGif from '../images/lorenz.gif';
import fourierGif from '../images/fourier.gif';
import gravityGif from '../images/gravity.gif';




export default function ProjectsPage() {
    const projects = [
      {
        id: 1,
        title: "Lorenz System",
        description: "This simulation plots the solution of the Lorenz system of equations.",
        image: lorenzGif,
        link: "https://rachelpeterson484.github.io/p5_portfolio/lorenz_system/lorenz.html",
        github: "https://github.com/rachelpeterson484/p5_portfolio/tree/master/lorenz_system"
      },
      {
        id: 2,
        title: "2D Fourier Analysis",
        description: "Uses a user-given drawing to compute a 2D fourier transformation, computed using the discrete fourier transformation equation.",
        image: fourierGif,
        link: "https://rachelpeterson484.github.io/p5_portfolio/fourier_transformation/fourier.html",
        github: "https://github.com/rachelpeterson484/p5_portfolio/tree/master/fourier_transformation"
      },
      {
        id: 3,
        title: "Gravity Simulators",
        description: "This gravity simulation allows for you to change both the mass and the strength of gravity with the bars below. It uses the laws of gravity and physics to control the spheres. Once they hit the walls, they'll bounce back into the screen.",
        image: gravityGif,
        link: "https://rachelpeterson484.github.io/p5_portfolio/gravity_simulation/gravity.html",
        github: "https://github.com/rachelpeterson484/p5_portfolio/tree/master/gravity_simulation"
      }
    ];
  
    return (
        <section
        id="projects"
        className="background-projects text-white"
        style={{ minHeight: '100vh', paddingBottom: '2rem' }}
        >
        <div
            className="projects-header w-100 d-flex align-items-center justify-content-end"
            style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '1rem 20px',
            backgroundColor: 'transparent',
            }}
        >
            <div className="d-flex gap-3" style={{ fontFamily: 'Courier New, monospace' }}>
                <a href="#main" className="btn btn-outline-dark">Home</a>
                <a href="#experience" className="btn btn-outline-dark">Experience</a>
                <a href="#contact" className="btn btn-outline-dark">About Me</a>
            </div>
        </div>

        <div className="container text-center">
            <h1 className="typed-text mb-5">Projects</h1>

            {projects.map(project => (
            <div
                key={project.id}
                className="d-flex flex-column flex-md-row align-items-center mb-5 p-4 rounded shadow"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.20)' }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid mb-3 mb-md-0 me-md-4"
                    style={{ maxWidth: '300px', borderRadius: '12px' }}
                />
                <div className="text-start">
                    <h3 className="mb-2">{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} className="btn btn-primary me-2">Live Site</a>
                    <a href={project.github} className="btn btn-outline-light">GitHub</a>
                </div>
            </div>
            ))}
        </div>
        </section>

    );
  }
  
  
