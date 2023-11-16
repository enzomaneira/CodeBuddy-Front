import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./BotaoGrupo.module.css";

const BotaoGrupo = () => {
    return (
        <Link to="/Grupos" style={{ textDecoration: 'none' }}>
  <div className={styles.container}>
    Grupo de Estudos 
  </div>
</Link>

    )
};

export default BotaoGrupo;
