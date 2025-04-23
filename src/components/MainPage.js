import React, { useEffect, useState } from "react";
import "./MainPage.css"; 

export default function MainPage() {
  const [text, setText] = useState("");
  const fullText = "Hii, my name is Rachel Peterson.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length - 1) {
        setText((prevText) => prevText + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="main"
      className="background-main d-flex flex-column justify-content-center align-items-center text-white"
      style={{ height: '100vh' }}
    >
        <h1 className="typed-text">
            {text}<span className="cursor">|</span>
        </h1>
        <p className="typed-text mt-3 fs-5">
            I'm a <strong>software engineer</strong> in Seattle.
        </p>
        <div className="mt-4 d-flex gap-3" style={{ fontFamily: 'Courier New, monospace' }}>
            <a href="#experience" className="btn btn-outline-dark">experience</a>
            <a href="#projects" className="btn btn-outline-dark">projects</a>
            <a href="#contact" className="btn btn-outline-dark">contact</a>
        </div>
    </section>
  );
}
