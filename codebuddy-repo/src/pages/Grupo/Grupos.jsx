import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ContainerP from "../../components/container/ContainerP";
import styles from "./Grupos.module.css";
import TextContainer from "../../components/container/TextContainer";

const Grupos = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        const currentUser = data.find(user => user.id === 2);
        setUser(currentUser);
        console.log(currentUser);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const renderGroups = () => {
    if (user && user.qtdgrupos > 0) {
      return user.grupos.map((grupo, index) => (
        <div key={index} className={styles.groupContainer}>
          <TextContainer texto={`${grupo}`} />
        </div>
      ));
    } else {
      return <div>No groups available.</div>;
    }
  };

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
        {console.log('Rendering Grupos component')}
        {user && user.grupos ? (
          <div className={styles.userContainer}>
            {renderGroups()}
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
};

export default Grupos;
