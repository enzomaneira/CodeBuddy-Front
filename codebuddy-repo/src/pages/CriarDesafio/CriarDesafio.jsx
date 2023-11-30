// CriarDesafio.jsx
import React, { useState } from "react";
import ContainerG from "../../components/container/ContainerG";
import styles from "./CriarDesafio.module.css";
import NavbarCriarDesafio from "./componentsCriarDesafio/NavbarCriarDesafio";
import Navbar from "../../components/Navbar";

const CriarDesafio = () => {
  const [nome, setNome] = useState("");
  const [texto, setTexto] = useState("");
  const [inputEsperado, setInputEsperado] = useState("");
  const [outputEsperado, setOutputEsperado] = useState("");
  const [dificuldade, setDificuldade] = useState("Fácil");

  const handleCriarDesafio = () => {
    console.log("Desafio criado!");
  };

  return (
    <div>
      <Navbar />
      <ContainerG style={{ backgroundColor: "#4565B7" }}>
        <NavbarCriarDesafio className={styles.navbarDesafio} title="Criar Desafio" backButton />
        <div className={`${styles.formContainerDesafio} ${styles.criarDesafio}`}>
          <form className={styles.formDesafio}>
            <label htmlFor="nome" className={styles.labelDesafio}>
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={styles.inputDesafio}
            />

            <label htmlFor="texto" className={styles.labelDesafio}>
              Texto:
            </label>
            <textarea
              id="texto"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className={styles.textareaDesafio}
            ></textarea>

            <label htmlFor="inputEsperado" className={styles.labelDesafio}>
              Input Esperado:
            </label>
            <input
              type="text"
              id="inputEsperado"
              value={inputEsperado}
              onChange={(e) => setInputEsperado(e.target.value)}
              className={styles.inputDesafio}
            />

            <label htmlFor="outputEsperado" className={styles.labelDesafio}>
              Output Esperado:
            </label>
            <input
              type="text"
              id="outputEsperado"
              value={outputEsperado}
              onChange={(e) => setOutputEsperado(e.target.value)}
              className={styles.inputDesafio}
            />

            <label htmlFor="dificuldade" className={styles.labelDesafio}>
              Dificuldade:
            </label>
            <select
              id="dificuldade"
              value={dificuldade}
              onChange={(e) => setDificuldade(e.target.value)}
              className={styles.selectDesafio}
            >
              <option value="Fácil">Fácil</option>
              <option value="Médio">Médio</option>
              <option value="Difícil">Difícil</option>
            </select>

            <button type="button" onClick={handleCriarDesafio} className={styles.buttonDesafio}>
              Criar
            </button>
          </form>
        </div>
      </ContainerG>
    </div>
  );
};

export default CriarDesafio;
