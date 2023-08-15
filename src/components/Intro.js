import React from "react";
import { useState, useEffect } from "react";
import profileImg from "../assets/edwin2.png";

function Intro() {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const toRotate = ["Web Designer", "Web Developer", "UI/UX Designer"];
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(500);
    }
  };

  return (
    <div className="Intro-Info">
      <div className="my-picture">
        <img src={profileImg} alt="Edwin" />
      </div>

      <div className="my-introduction">
        <button> Welcome to my Portfolio</button>
        <h3>HELLO I'M </h3>
        <h1> Kipleting Edwin!</h1>
        <h2>
          {" "}
          I am a <span>{text}</span>
        </h2>
      </div>
    </div>
  );
}

export default Intro;
