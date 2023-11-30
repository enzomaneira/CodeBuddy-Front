import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarCriarDesafio.module.css";
import backarrow from "../../../img/backarrow.png";


const NavbarCriarDesafio = ({ title, backButton }) => {
  return (
    <nav className={styles.navbar}>
        <span>{title}</span>
      {backButton && (
        <div className={styles.img}>
        <Link to="/profile" className={styles.link}>
          <img src={backarrow} alt="Back Arrow" />
        </Link>
      </div>
      )}
    </nav>
);
};

export default NavbarCriarDesafio;
