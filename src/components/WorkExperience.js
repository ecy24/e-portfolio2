import React from "react";
import styles from "../styles/AboutMe.module.css";
import profileImg from "../assets/profile-image.svg";
import TechnologyList from "./technology-list/TechnologyList";
import programingLanguages from "../data/programingLanguagesData";

const Work = () => {
  return (
    <>
      <div id="work-experience" className="sections container">
        <h2 className="section-heading">Past Work Experience</h2>
        <div className={`row ${styles["inner-content"]}`}>
          <div className="col">
            <h3>Klass Engineering and Solutions</h3>
            <p>My past working experience was an internship with a security company in Singapore. It is a company that tries to use emerging technology within their engineered products using applied research and development. While I was working there, I was tasked with quality assurace of their video analytics systems capable of doing object analytics and people analytics.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
