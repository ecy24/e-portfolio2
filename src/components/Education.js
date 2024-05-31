import React from "react";
import styles from "../styles/Popup.module.css";

const Education = () => {
  return (
    <>
      <div id="education" className={`sections container`}>
        <h2 className="section-heading">Education & Skills</h2>
        <div className={`row ${styles["inner-content"]}`}>
          <div className="col">
            <h2>Bachelor of Engineering in Robotics Systems</h2>
            <h3>2022 - present</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                Artificial Intelligence
              </li>
              <li className={styles.skillItem}>
                Control Systems
              </li>
              <li className={styles.skillItem}>
                Robotic Operating System (ROS)
              </li>
              <li className={styles.skillItem}>
                System Engineering
              </li>
              <li className={styles.skillItem}>
                Project Management
              </li>
              <li className={styles.skillItem}>
                Python Programming
              </li>
              <li className={styles.skillItem}>
                C/C++ Programming
              </li>
            </ul>
          </div>
        </div>
        <div className={`row ${styles["inner-content"]}`}>
          <div className="col">
            <h2>Diploma in Computer Engineering</h2>
            <h3>2017 - 2019</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                Computer Hardware
              </li>
              <li className={styles.skillItem}>
                Networking
              </li>
              <li className={styles.skillItem}>
                Software Development
              </li>
              <li className={styles.skillItem}>
                Java Programming
              </li>
              <li className={styles.skillItem}>
                Android Development
              </li>
              <li className={styles.skillItem}>
                Web Development
              </li>
              <li className={styles.skillItem}>
                Data Analytics
              </li>
              <li className={styles.skillItem}>
                Internet-of-things (IoT)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;

