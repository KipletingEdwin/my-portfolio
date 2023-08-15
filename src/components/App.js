import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
