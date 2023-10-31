import React from "react";
import styles from "./CadastroForm.module.css";
import WhiteBall from "./WhiteBall";
import { Link } from "react-router-dom";

function CadastroForm(){
  return (
    <form>
      <div className={styles.formGroup}>
      <input type="text" id="login" name="login" placeholder="Login" />
      </div>

      <div className={styles.formGroup}>
        <input type="password" id="senha" name="senha" placeholder="Senha" />
      </div>
      <input type="password" id="senha" name="senha" placeholder="Confirmar Senha" />

      <div className={styles.formGroup}>
        
      </div>
       <Link to="/Profile">
      <button className={styles.button} type="submit">
        Cadastrar
      </button>
      </Link>
    </form>
  );
};

export default CadastroForm;
