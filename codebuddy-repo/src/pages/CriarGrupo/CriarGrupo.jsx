import React from "react";
import Navbar from "../../components/Navbar";
import ContainerG from "../../components/container/ContainerG";
import styles from "./CriarGrupo.module.css";
import Footer from "../../components/Footer";
import FormularioCriarGrupo from "../../components/form/FormularioCriarGrupo"; 
import { Link } from "react-router-dom";

const CriarGrupo = () => {
  return (
    <div className={styles.content}>
      <Navbar />
      <ContainerG>
        <h2>Criar Grupo</h2>
        <FormularioCriarGrupo /> 
      </ContainerG>
      <Footer />
    </div>
  );
};

export default CriarGrupo;
