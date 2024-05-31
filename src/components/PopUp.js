// src/components/PopUp.js

import React from "react";
import styles from "../styles/PopUp.module.css";

const PopUp = ({ certName, time, onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h3>{certName}</h3>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default PopUp;

