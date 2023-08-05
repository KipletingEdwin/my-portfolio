import React from "react";
import { useState, useEffect } from "react";

function Intro() {
  const [loopNumber, setLoopNumber] = useState(0);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [ text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() =>{
    let ticker = setInterval(() =>{
      ticker();

    }, delta)

    return() => {clearInterval(ticker);}
  })



  return (
    <div className="Intro-Info">
      <div className="my-picture">
        <img src="../images/edwin.png" alt="Edwin" />
      </div>

      <div className="my-introduction">
        <h3>HELLO I'M  </h3>
        <h1> Kipleting Edwin!</h1>
        <h2>Full Stack Developer</h2>
      </div>
    </div>
  );
}

export default Intro;
