import React from "react";
import ContainerP from "../../components/ContainerP";
import styles from "./Profile.module.css";
import WhiteBall from "../../components/form/WhiteBall";
import Navbar from '../../components/Navbar';
import TextContainer from "../../components/TextContainer";
import BotaoGrupo from "./botao/BotaoGrupo"
import BotaoCriarGrupo from "../CriarGrupo/botao/BotaoCriarGrupo";

const Profile = () => {
  return (
    <div className={styles.page}>
      <Navbar/> 
      <div className={styles.infosContainer}>
        <WhiteBall className={styles.whiteBall} />
        <ContainerP backgroundColor="orange" className={styles.container}>
          <div className={styles.textContainer}>
            <div><TextContainer texto="Username"/></div>
            <div><TextContainer texto="Grupos"/></div>
          </div>
        </ContainerP>
        </div>
        <div className={styles.botaoGrupo}>
          <BotaoGrupo/>
        <div className={styles.botaoContainer}>
          <BotaoCriarGrupo/>
        <div className={styles.texto}>Criar Grupo </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
