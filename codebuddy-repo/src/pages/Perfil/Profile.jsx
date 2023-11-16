import React from "react";
import ContainerM from "../../components/container/ContainerM";
import styles from "./Profile.module.css";
import WhiteBall from "../../components/form/WhiteBall";
import Navbar from '../../components/Navbar';
import TextContainer from "../../components/container/TextContainer";
import BotaoGrupo from "../Grupo/botao/BotaoGrupo"
import BotaoCriarGrupo from "../CriarGrupo/botao/BotaoCriarGrupo";

const Profile = () => {
  return (
    <div className={styles.page}>
      <Navbar/> 
      <WhiteBall className={styles.whiteBall} />
      <ContainerM backgroundColor="orange" className={styles.container}>
        <div className={styles.textContainer}>
        <div><TextContainer texto="Username"/></div>
        <div><TextContainer texto="Grupos"/></div>
        </div>
      </ContainerM>
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
