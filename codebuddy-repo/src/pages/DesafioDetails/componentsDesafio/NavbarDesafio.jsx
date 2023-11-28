import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Navbardesafio.module.css";
import backarrow from "../../../img/backarrow.png";

const NavbarDesafio = () => {
  const { grupoNome, desafioNome } = useParams();

  return (
    <div className={styles.navbarDesafio}>
      <div className={styles.title}>Desafio {desafioNome} - Grupo {grupoNome}</div>
      <div className={styles.img}>
        <Link to={`/Desafios/${encodeURIComponent(grupoNome)}`}>
          <img src={backarrow} alt="Back Arrow" />
        </Link>
      </div>
    </div>
  );
};

export default NavbarDesafio;
