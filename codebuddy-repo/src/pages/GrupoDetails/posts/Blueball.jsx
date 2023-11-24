import React from "react";
import styles from "./Blueball.module.css";
import bola from "../../../img/ProfileIcon.png";

const Blueball = (props) => {
  return (
    <div className={`${styles.blueball} ${props.className}`}>
      <img className={styles.img} src={bola} alt="Imagem da Bola" width="120" height="120" />
    </div>
  );
};

export default Blueball;
