import React, { Component } from "react";
import styles from "./Cards.module.css";
import iphone13 from "../images/iphone 13.jpg";
import samsungS21 from "../images/samsung S21.webp";
import xiaomi from "../images/xiaomi mi11.jpg";
import huawei from "../images/Huawei P30.jpg";
import Card from "./Card.js";
class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={iphone13} name='Iphone13' cost='1000 $' />
        <Card image={samsungS21} name='Samsung S21' cost='1500 $' />
        <Card image={xiaomi} name='Xiaomi Mi11' cost='800 $' />
        <Card image={huawei} name='Huawei P30 pro' cost='1000 $' />
      </div>
    );
  }
}

export default Cards;
