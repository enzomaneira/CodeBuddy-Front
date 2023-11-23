// BotaoGrupo.jsx
import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./BotaoGrupo.module.css";

const BotaoGrupo = () => {
  return (
    <div className={styles.container}>
      <Link to="/Grupos" className={styles.link}>
        Grupo de Estudos 
      </Link>
    </div>
  );
};

export default BotaoGrupo;
