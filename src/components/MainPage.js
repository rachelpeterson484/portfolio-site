import React, { useEffect, useState } from "react";
import "./MainPage.css"; 

export default function MainPage() {
  const [text, setText] = useState("");
  const fullText = "Hi, my name is Rachel Peterson.";

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
    <section
      className="background-main d-flex justify-content-center align-items-center text-white"
      style={{ height: '100vh' }}
    >
        <h1 className="typed-text">
            {text}<span className="cursor">|</span>
        </h1>
    </section>
  );
}
