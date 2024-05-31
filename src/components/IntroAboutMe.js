import React from "react";
import styles from "../styles/IntroAboutMe.module.css";

const IntroAboutMe = () => {
  return (
    <>
      <div
        id={styles["intro-about-me"]}
        className={`container ${styles["about-container"]}`}
      >
        <div className="row">
          {/* Greetings */}
          <div className="col">
            <h1 className={styles["greetings"]}> Hi, my name is</h1>
          </div>

          <div className="w-100"></div>

          {/* My name */}
          <div className="col">
            <h2 className={styles["my-name"]}> Ethan </h2>
          </div>

          <div className="w-100"></div>

          {/* Small fact */}
          <div className="col">
            <h3 className={styles["small-fact"]}> I build reliable systems </h3>
          </div>

          <div className="w-100"></div>

          {/* Big fact */}
          <div className="col">
            <p className={styles["big-fact"]}>
              I am a second-year Robotics System Engineering undergraduate student at the
              Singapore Institute of Technology, currently learning new technologies
              and theories while working on new projects (mainly automation/system engineering).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroAboutMe;
