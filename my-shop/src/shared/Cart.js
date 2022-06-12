import React, { useContext } from "react";

//Context
import { CardContext } from "../Context/CardContextProvider";

//Functions
import { shorten } from "../helpers/functions";

//ICONS
import trash from "../images/trash.svg";

//styles
import styles from "./Cart.module.css";

const Cart = (props) => {
  // console.log(props.data);
  const { dispatch } = useContext(CardContext);
  const { image, name, cost, quantity } = props.data;

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt="product" />
      <div>
        <h3>{shorten(name)}</h3>
        <p>{cost} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img src={trash} alt="trash" style={{ width: "20px" }} />
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
