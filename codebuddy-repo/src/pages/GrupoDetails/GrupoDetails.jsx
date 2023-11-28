// GrupoDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavbarGrupo from "./componentsGrupo/NavbarGrupo";
import ContainerG from "../../components/container/ContainerG";
import styles from "./GrupoDetails.module.css";
import Posts from "./posts/Posts";
import nextleft from "../../img/nextleft.png";
import nextright from "../../img/nextright.png";

const GrupoDetails = () => {
  const { nome } = useParams();

  return (
    <div>
      <Navbar />
      <ContainerG style={{ backgroundColor: "#4565B7" }}>
        <NavbarGrupo />
        <div className={styles.postsContainer}>
        <div className={styles.postsWrapper}>
          <Posts groupName={nome} />
          <Posts groupName={nome} />
        </div>
        </div>
        <div className={styles.bottomImagesContainer}>
          <img src={nextright} alt="nextright" className={`${styles.bottomImage} ${styles.inverted}`} />
          <img src={nextleft} alt="nextleft" className={styles.bottomImage} />
        </div>
      </ContainerG>
    </div>
  );
};

export default GrupoDetails;
