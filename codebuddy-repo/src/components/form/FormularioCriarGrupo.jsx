import React from "react";
import styles from "./FormularioCriarGrupo.module.css";

const FormularioCriarGrupo = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <input type="text" id="nome" name="nome" placeholder="Nome"/>
      </div>
      <div className={styles.formGroup}>
        <select id="foco" name="foco" placeholder="Foco">
          <option value="programacao">Programação</option>
          <option value="bancodeDados">Banco de Dados</option>
          <option value="algoritmo">Algoritmo</option>
          <option value="arquitetura">Arquitetura</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <input type="text" id="adicionarAluno" name="adicionarAluno" placeholder="Adicinar Aluno" />
        <button className={styles.addButton}>+</button>
      </div>
      <div className={styles.formGroupDescription}>
        <textarea id="descricao" name="descricao" className={styles.textAreaDescription} placeholder="Descrição"/>
      </div>
      <button className={styles.submitButton} type="submit">
        Criar Grupo
      </button>
    </form>
  );
};

export default FormularioCriarGrupo;
