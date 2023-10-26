import React from "react";
import styles from "./LoginForm.module.css";
import WhiteBall from "./WhiteBall"; 
const LoginForm = () => {
  return (
    <form>
      <WhiteBall /> 
      <div className={styles.formGroup}>
      <input type="text" id="login" name="login" placeholder="Login" />
      </div>

      <div className={styles.formGroup}>
      <input type="password" id="senha" name="senha" placeholder="Senha" />
      </div>
      <button className={styles.button} type="submit">
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
