import React from "react";
import styles from "../styles/AboutMe.module.css";
import profileImg from "../assets/profile-image.svg";
import TechnologyList from "./technology-list/TechnologyList";
import programingLanguages from "../data/programingLanguagesData";

const AboutMe = () => {
  return (
    <>
      <div id="about-me" className="sections container">
        <h2 className="section-heading">About Me</h2>
        <div className={`row ${styles["inner-content"]}`}>
          <div className="col">
            <p>
              Hello there! My name is Ethan, and I was born and raised in Singapore. When I was deciding what to do for my future, I decided that automation of a good industry as it was one of the emerging industries within Singapore. Also, I would like to have a degree within the engineering space as I was looking to build up my quantitative skills and programming capabilities as an engineering undergraduate.
            </p>
            <p>
              When I was starting up withing my degree, I was struggling to build a proper computational thinking and system thinking skills as I was inefficient in coding and systems engineering. As time goes on, I realized that programming needs to be extremely logical in thinking and it takes alot of practiceto become better. As for system engineering, I need to have a strong foundation in the subject and learn different applications and methods on how system engineering can be done and how project management tools such as agile are being implemented. As a learning process, I feel that the learning curve is steep and I struggle to build a proper foundation. However, I felt that the skills obtained are worth it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
