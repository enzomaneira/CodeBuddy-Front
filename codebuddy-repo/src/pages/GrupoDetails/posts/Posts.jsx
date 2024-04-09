import React from "react";
import styles from "./Posts.module.css";
import Blueball from "./Blueball";

const Posts = ({ groupName, text }) => {
  return (
    <div>
      <div className={styles.post}>
        <Blueball className={styles.blueball}/>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default Posts;
