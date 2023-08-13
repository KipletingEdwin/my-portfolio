import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills/>
    </div>
  );
}

export default App;
