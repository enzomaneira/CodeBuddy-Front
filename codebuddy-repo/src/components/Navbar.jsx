import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <h2>CodeBuddy</h2>
            </div>
            <div className={styles.right}>
                <span>Login</span>
                <span>Registrar</span>
            </div>
        </nav>
    );
}

export default Navbar;
