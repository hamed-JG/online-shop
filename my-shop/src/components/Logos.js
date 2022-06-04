import React from "react";
import styles from "./Logos.module.css";
import xiaomi from '../images/Xiaomi-Logo.png'
import apple from '../images/apple-Logo.png'
import samsung from '../images/samsung-logo.png'
const Logos = () => {
  return <div className={styles.container}>
      <h3>Who Support Us?</h3>
      <img src={xiaomi} alt='logo'/>
      <img src={apple} alt='logo'/>
      <img src={samsung} alt='logo'/>
  </div>;
};

export default Logos;
