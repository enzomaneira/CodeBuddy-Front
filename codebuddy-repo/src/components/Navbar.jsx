import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <h2>CodeBuddy</h2>
        </div>
        <div className={styles.right}>
          <Link to="/login">Login</Link>
          <Link to="/register">Registrar</Link>
        </div>
      </nav>
    );
  }

export default Navbar;