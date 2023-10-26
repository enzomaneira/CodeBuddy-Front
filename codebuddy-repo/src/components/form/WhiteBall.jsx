import React from "react";
import styles from "./WhiteBall.module.css";
import bola from "../../img/ProfileIcon.png";

const WhiteBall = () => {
  return (
    <div className={styles.whiteBall}>
      <img src={bola} alt="Imagem da Bola" width="120" height="120" />
    </div>
  );
};

export default WhiteBall;
