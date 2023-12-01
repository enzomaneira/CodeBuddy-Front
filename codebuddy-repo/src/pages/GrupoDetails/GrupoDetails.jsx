import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavbarGrupo from "./componentsGrupo/NavbarGrupo";
import ContainerG from "../../components/container/ContainerG";
import styles from "./GrupoDetails.module.css";
import Posts from "./posts/Posts";
import nextleft from "../../img/nextleft.png";
import nextright from "../../img/nextright.png";
import PopupComponent from "./componentsGrupo/PopupComponent"; 

const GrupoDetails = () => {
  const { nome } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSendPost = (text) => {
    console.log("Botão Criar Post clicado");
    console.log("Enviando post:", text);
  };

  const handleCreatePost = () => {
    console.log("Botão Criar Post clicado");
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

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
        {/* Botão com popup integrado */}
        <div className={styles.botaoCriarPostIntegrated} onClick={handleCreatePost}>
          <div className={styles.text}>+</div>
        </div>
        {isPopupOpen && (
          <PopupComponent onClose={handleClosePopup} onSend={handleSendPost} />
        )}
        <div className={styles.bottomImagesContainer}>
          <img src={nextright} alt="nextright" className={`${styles.bottomImage} ${styles.inverted}`} />
          <img src={nextleft} alt="nextleft" className={styles.bottomImage} />
        </div>
      </ContainerG>
    </div>
  );
};

export default GrupoDetails;
