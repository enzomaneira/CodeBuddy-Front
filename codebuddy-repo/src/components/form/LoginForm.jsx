import React from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className={styles.body}>
      <div className={styles.formGroup}>
      <input type="text" id="login" name="login" placeholder="Login" />
      </div>

      <div className={styles.formGroup}>
      <input type="password" id="senha" name="senha" placeholder="Senha" />
      </div>
      <Link to="/Profile">
      <button className={styles.button} type="submit">
        Entrar
      </button>
      </Link>
    </form>
  );
};

export default LoginForm;
