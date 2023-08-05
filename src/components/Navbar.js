import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <div className="my-navbar">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>

      <div className="navbar-links">
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
        </ul>
      </div>
      <div class="social-container">
        <a href="https://twitter.com/carmago_jose_">
          <FontAwesomeIcon icon={faTwitter}  className="icons" />
        </a>
        <a href="https://twitter.com/carmago_jose_">
          <FontAwesomeIcon icon={faFacebook} className="icons" />
        </a>
        <a href="https://twitter.com/carmago_jose_">
          <FontAwesomeIcon icon={faInstagram} className="icons" />
        </a>
      </div>
    </div>
  );
}

//    <NavLink to='/home'>Home</NavLink>

export default Navbar;
