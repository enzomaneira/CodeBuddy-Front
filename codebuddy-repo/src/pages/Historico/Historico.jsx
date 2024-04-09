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
        const response = await fetch(`http://localhost:3000/users?id=${encodeURIComponent(alunoId)}`);
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
              <div>NOME DO ALUNO:</div>
              <span>{aluno.nome}</span>
              <div>QUANTIDADE DE GRUPOS PRESENTES:</div>
              <span>{aluno.qtdgrupos}</span>
              <div>NOMES DOS GRUPOS:</div>
              <div>
                {aluno.grupos.map((grupo, index) => (
                  <div key={index}>{grupo}</div>
                ))}
              </div>
            </div>
          ) : (
            <p>Nenhuma informacao sobre este aluno disponivel.</p>
          )}
        </div>
      </ContainerG>
    </div>
  );
};

export default Historico;
