import React from "react";
import githubIcon from '../images/icons/githubIcon.png';
import gmailIcon from '../images/icons/gmailIcon.png';
import linkedInIcon from '../images/icons/linkedinIcon.png';


import "./ContactsPage.css"; 

export default function ContactsPage() {
    return (
        <section
        id="contact"
        className="background-contact text-white"
        style={{ height: '100vh' }}
        >
        <div
            className="contact-header w-100 d-flex align-items-center justify-content-end"
            style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '1rem 20px',
            backgroundColor: 'transparent',
            height: '80px',
            }}
        >
            <div className="d-flex gap-3" style={{ fontFamily: 'Courier New, monospace' }}>
                <a href="#main" className="btn btn-outline-dark">Home</a>
                <a href="#experience" className="btn btn-outline-dark">Experience</a>
                <a href="#projects" className="btn btn-outline-dark">Projects</a>
            </div>
        </div>

        <div
            className="d-flex flex-column justify-content-center align-items-center p-4"
            style={{ height: 'calc(100vh - 80px)', textAlign: 'center' }}
        >
            <h1 className="typed-text mb-4">About Me</h1>

            <div className="d-flex justify-content-center">
            <h3
                className="description mb-4"
                style={{
                width: '100%',
                maxWidth: '1000px',
                whiteSpace: 'normal',
                wordBreak: 'normal',
                }}
            >
                Hi, my name is Rachel. I graduated from the University of Florida in May 2023 with a Bachelor of Science in Computer Science. 
                Since then, I've been working at Qualtrics on the Healthcare Regulatory Engineering team.
                Professionally, I've worked with <strong>Python</strong>, <strong>SQL</strong>, <strong>JavaScript</strong>, and <strong>React</strong>, but have also worked on school projects using <strong>C++</strong> and worked as a teaching assistant using <strong>Java</strong>.
            </h3>
            </div>

            <h1 className="typed-text mb-4 mt-4">Contact Me</h1>

            <div className="d-flex justify-content-center gap-4">
            <a href="https://github.com/rachelpeterson484" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" style={{ width: '60px', borderRadius: '50%' }} />
            </a>
            <a href="https://www.linkedin.com/in/rachel-m-peterson/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="LinkedIn" style={{ width: '60px', borderRadius: '50%' }} />
            </a>
            <a href="mailto:rachel.peterson0804@gmail.com">
                <img src={gmailIcon} alt="Email" style={{ width: '60px', borderRadius: '50%' }} />
            </a>
            </div>
        </div>
        </section>
    );
  }
  
