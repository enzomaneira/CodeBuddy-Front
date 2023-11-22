import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ContainerP from "../../components/container/ContainerP";
import styles from "./Grupos.module.css";

const Grupos = () => {
  const [user, setUser] = useState(null);
  const userId = 1; 

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        const currentUser = data.find(user => user.id === 2); 
        setCurrentUser(currentUser);
        console.log(currentUser);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);
  

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
        {user ? (
          <div key={user.id} className={`${styles.userContainer}`}>
            {user.grupos.map((grupo, index) => (
              <ContainerP key={index}>
                <p>{grupo}</p>
              </ContainerP>
            ))}
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
  
  
  
};

export default Grupos;
