import React, { Component } from "react";
import styles from "./Search.module.css";
class Search extends Component {
  render() {
    return <div className={styles.container}>
        <p>search what you want</p>
        <input placeholder="Search"/>
    </div>;
  }
}

export default Search;
