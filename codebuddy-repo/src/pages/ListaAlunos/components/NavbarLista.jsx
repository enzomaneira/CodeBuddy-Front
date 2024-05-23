import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "./NavbarGrupo.module.css";
import backarrow from "../../../img/backarrow.png";


const NavbarLista = ({ grupoNome }) => {
    const navigate = useNavigate();
  
    return (
      <div className={styles.navbarGrupo}>
        <div className={styles.title}>Grupo {grupoNome}</div>
      <div className={styles.img}>
        <Link onClick={() => navigate(-1)} className={styles.link}>
          <img src={backarrow} alt="Back Arrow" />
        </Link>
      </div>
    </div>
  );
};

export default NavbarLista;

