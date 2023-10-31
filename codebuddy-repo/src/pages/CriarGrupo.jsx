import React from "react";
import Navbar from "../components/Navbar";
import ContainerG from "../components/ContainerG";
import styles from "./CriarGrupo.module.css";
import Footer from "../components/Footer";
import FormularioCriarGrupo from "../components/form/FormularioCriarGrupo"; // Importe o componente do formulário

const CriarGrupo = () => {
  return (
    <div className={styles.content}>
      <Navbar />
      <ContainerG>
        <h2>Criar Grupo</h2>
        <FormularioCriarGrupo /> {/* Adicione o formulário aqui */}
      </ContainerG>
      <Footer />
    </div>
  );
};

export default CriarGrupo;
