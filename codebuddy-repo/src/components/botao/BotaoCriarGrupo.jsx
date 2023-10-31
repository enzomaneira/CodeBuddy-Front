import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./BotaoCriarGrupo.module.css";

const BotaoCriarGrupo = () => {
    return (
        <Link to="/CriarGrupo" style={{ textDecoration: 'none' }}>
        <div className={styles.botao}>
            +
        </div>
        </Link>

    )
};

export default BotaoCriarGrupo;
