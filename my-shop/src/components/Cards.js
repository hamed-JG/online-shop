import React, { Component } from "react";
import styles from "./Cards.module.css";
import iphone from "../images/iphone 13.jpg";
import samsung from "../images/samsung S21.webp";
import xiaomi from "../images/xiaomi mi11.jpg";
import huawei from "../images/Huawei P30.jpg";
import Card from "./Card.js";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { id: 1, image: iphone, name: "Iphone13", cost: "1000 $" },
        { id: 2, image: samsung, name: "Samsung S21", cost: "1500 $" },
        { id: 3, image: xiaomi, name: "Xiaomi Mi11", cost: "800 $" },
        { id: 4, image: huawei, name: "Huawei P30 pro", cost: "1000 $" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.phoneData.map((phone) => (
          <Card
            key={phone.id}
            image={phone.image}
            name={phone.name}
            cost={phone.cost}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
