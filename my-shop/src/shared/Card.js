import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { CardContext } from "../Context/CardContextProvider";
import { isInCard, quantityCount } from "../helpers/functions";

//ICONS
import trash from "../images/trash.svg";

//Pics and styles
import styles from "./Card.module.css";

const Card = (props) => {
  const { image, name, cost, id } = props;

  const { state, dispatch } = useContext(CardContext);

  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={image} alt="products" />
      <h3>
        {name}
      </h3>
      <p>{cost}</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch({ type: "DECREASE", payload: props })}
            >
              -
            </button>
          )}
          {quantityCount(state, id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props })}
            >
              <img src={trash} alt="trash"/>
            </button>
          )}
          {quantityCount(state, id) > 0 && (
            <span className={styles.counter}>{quantityCount(state, id)}</span>
          )}
          {isInCard(state, id) ? (
            <button
              className={styles.smallButton}
              onClick={() => dispatch({ type: "INCREASE", payload: props })}
            >
              +
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: props })}
            >
              Add to Card
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
