import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import {greeting, workExperiences} from "../../portfolio";

function Header() {
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="https://firebasestorage.googleapis.com/v0/b/project-7860.appspot.com/o/MyCV.pdf?alt=media&token=c35fdcb6-984a-4db2-a1d6-59f35fdf3a8a" target="_blank">Resume</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          {/* { exp === true &&
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          } */}
          {/* <li>
            <a href="#opensource">Open Source</a>
          </li> */}
          <li>
            <a href="#projects">Work Samples</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          {/* <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#talks">Talks</a>
          </li> */}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
);
}
export default Header;
