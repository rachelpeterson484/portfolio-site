import React, { useEffect, useState } from "react";
import experienceImage from '../images/ExperienceTimeline.png';
import "./ExperiencePage.css"; 

export default function ExperiencePage() {
  return (
    <section id="experience"
      className="background-experience d-flex flex-column justify-content-center align-items-center text-white"
      style={{ height: '100vh', paddingTop: '80px' }}
    >
        <h1 className="typed-text">
            Experience
        </h1>
        <img style={{ maxWidth: '1100px', width: '100%' }} src={experienceImage} alt="Work experience" />

    </section>
  );
}
