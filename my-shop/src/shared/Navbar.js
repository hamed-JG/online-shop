import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { CardContext } from "../Context/CardContextProvider";

import styles from "./Navbar.module.css";

//Icons
import cartIcon from "../images/shop.svg";

const Navbar = () => {
  const { state } = useContext(CardContext);

  return (
    <header className={styles.header}>
      <div>
        <ul className={styles.list}>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.iconContainer}>
        <Link to="/cart">
          <img className={styles.logo} src={cartIcon} alt="logo" />
        </Link>
        <span>{state.itemsCounter}</span>
      </div>
    </header>
  );
};

export default Navbar;
