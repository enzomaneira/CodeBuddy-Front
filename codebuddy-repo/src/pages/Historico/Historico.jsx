import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavbarGrupo from "../GrupoDetails/componentsGrupo/NavbarGrupo";
import ContainerG from "../../components/container/ContainerG";
import styles from "./Historico.module.css";

const Historico = () => {
  const { alunoId } = useParams();
  const [aluno, setAluno] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAluno = async () => {
      try {
        const response = await fetch(`http://localhost:3000/alunos?id=${encodeURIComponent(alunoId)}`);
        const alunoData = await response.json();
        setAluno(alunoData[0] || null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching aluno:', error);
        setLoading(false);
      }
    };

    fetchAluno();
  }, [alunoId]);

  return (
    <div>
      <Navbar />
      <ContainerG style={{ backgroundColor: "#4565B7" }}>
        <NavbarGrupo />
        <div className={styles.listaAlunos}>
          {loading ? (
            <p>Carregando...</p>
          ) : aluno ? (
            <div className={styles.alunoItem}>
              <div className={styles.infoItem}>
                <span className={styles.title}>NOME:</span>
                <span className={styles.text}>{aluno.nome}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.title}>GRUPO:</span>
                <span className={styles.text}>{aluno.qtdgrupos}</span>
              </div>
            </div>
          ) : (
            <p>Nenhuma informação sobre este aluno disponível.</p>
          )}
        </div>
      </ContainerG>
    </div>
  );
};

export default Historico;
