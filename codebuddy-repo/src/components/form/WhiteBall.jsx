import React from "react";
import styles from "./WhiteBall.module.css";
import bola from "../../img/ProfileIcon.png";

const WhiteBall = (props) => {
  return (
    <div className={`${styles.whiteBall} ${props.className}`}>
      <img className={styles.img} src={bola} alt="Imagem da Bola" width="120" height="120" />
    </div>
  );
};

export default WhiteBall;
