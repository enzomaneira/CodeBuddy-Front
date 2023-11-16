/* Grupos.jsx */
import React from "react";
import Navbar from "../../components/Navbar";
import styles from "./Grupos.module.css";
import ContainerP from "../../components/container/ContainerP";

const Grupos = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.titulo}>
        <h4>Grupos</h4>
        <input
          type="text"
          className={styles.buscarGrupo}
          placeholder="Buscar Grupo"
        />
      </div>
      <div className={styles.container}>
        <ContainerP/>
      </div>
    </div>
  );
};

export default Grupos;