import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Grupos.module.css";
import ContainerP from "../../components/container/ContainerP";

const Grupos = () => {
  const [users, setUsers] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const userId = 2; 

  useEffect(() => {
    fetch('http://localhost:3000/users') 
      .then(response => response.json())
      .then(data => {
        setUsers(data.users || []);
        setGrupos(data.grupos || []);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const user = users.find(user => user.id === userId);
    if (user) {
      const groupNames = user.grupos.map(groupId => {
        const group = grupos.find(group => group.id === groupId);
        return group ? group.nome : null;
      });
      setUserGroups(groupNames);
    }
  }, [userId, users, grupos]);

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
        {userGroups.map((groupName, index) => (
          <ContainerP key={index}>
            <p>{groupName}</p>
          </ContainerP>
        ))}
      </div>
    </div>
  );
};

export default Grupos;
