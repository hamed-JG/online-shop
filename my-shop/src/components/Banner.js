import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/banner.jpg";
const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="banner" />
      <div className={styles.textContainer}>
        <h1>React Project</h1>
        <p>
          this is first project with <span>React.js</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
