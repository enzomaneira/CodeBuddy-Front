import React from "react";
import styles from "./BotaoDesafio.module.css";
import setaDesafio from "../../../img/setaDesafio.png"

const BotaoDesafio = ({ onClick, children }) => {
  return (
    <div className={styles.botao} onClick={onClick}>
      <img src={setaDesafio} alt="Seta Desafio" />
    </div>
  );
};

export default BotaoDesafio;