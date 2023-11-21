import { React, useEffect, useState } from "react";
import ContainerP from "../../components/container/ContainerM";
import styles from "./Profile.module.css";
import WhiteBall from "../../components/form/WhiteBall";
import Navbar from '../../components/Navbar';
import TextContainer from "../../components/container/TextContainer";
import BotaoGrupo from "./botao/BotaoGrupo";
import BotaoCriarGrupo from "../CriarGrupo/botao/BotaoCriarGrupo";
import { Link } from "react-router-dom";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        const currentUser = data.find(users => users.id === "2");
        setCurrentUser(currentUser);
        console.log(currentUser);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.infosContainer}>
        <WhiteBall className={styles.whiteBall} />
        <ContainerP backgroundColor="orange" className={styles.container}>
          <div className={styles.textContainer}>
            {currentUser && (
              <>
                <div>
                  <TextContainer texto={`Name: ${currentUser.nome}`} />
                </div>
                <div>
                  <TextContainer texto={`Grupos: ${currentUser.qtdgrupos}`} />
                </div>
              </>
            )}
          </div>
        </ContainerP>
      </div>
      <div className={styles.botaoGrupo}>
      <Link to="/Grupos" style={{ textDecoration: 'none' }}>
        <BotaoGrupo />
        </Link>
        <div className={styles.botaoContainer}>
          <BotaoCriarGrupo />
          
          <div className={styles.texto}>Criar Grupo </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
