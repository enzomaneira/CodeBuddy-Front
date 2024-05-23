import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./Grupos.module.css";
import TextContainer from "../../components/container/TextContainer";
import { Link } from "react-router-dom";

const Grupos = () => {
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/alunos')
      .then(response => response.json())
      .then(data => {
        const currentUser = data.find(aluno => aluno.id === 1);
        setAluno(currentUser);
        console.log(currentUser);
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const renderGroups = () => {
    if (aluno && aluno.qtdgrupos > 0) {
      return (
        <div className={styles.groupsGrid}>
          {aluno.grupos.map((grupo, index) => (
            <div key={index} className={styles.groupContainer}>
              <Link key={index} to={`/Grupo/${encodeURIComponent(grupo)}`}>
                <TextContainer texto={`${grupo}`} />
              </Link>
            </div>
          ))}
        </div>
      );
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
      <div>
        {console.log('Rendering Grupos component')}
        {aluno && aluno.grupos ? (
          <div>
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
