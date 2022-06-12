import React, { useContext } from "react";

//Functions
import { shorten } from "../helpers/functions";

//Context
import { productsContext } from "../Context/ProductsContextProvider";

//Components
import Card from "../shared/Card";
import styles from "./Products.module.css";

const Products = () => {
  const products = useContext(productsContext);

  return (
    <div className={styles.container}>
      {products.length
        ? products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              image={product.image}
              name={shorten(product.title)}
              cost={`${product.price}$`}
            />
          ))
        : <div className={styles.load}>Loading...</div>}
    </div>
  );
};

export default Products;
