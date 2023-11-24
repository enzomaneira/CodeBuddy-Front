// NavbarGrupo.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./NavbarGrupo.module.css";
import backarrow from "../../../img/backarrow.png";

const NavbarGrupo = () => {
  const { nome } = useParams();

  return (
    <div className={styles.navbarGrupo}>
      <div className={styles.title}>Grupo {nome}</div>
      <div className={styles.text}>Desafios</div>
      <div className={styles.img}>
        <Link to="/profile" className={styles.link}>
          <img src={backarrow} alt="Back Arrow" />
        </Link>
      </div>
    </div>
  );
};

export default NavbarGrupo;
