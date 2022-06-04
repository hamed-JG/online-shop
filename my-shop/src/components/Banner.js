import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/banner.jpg";
const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
