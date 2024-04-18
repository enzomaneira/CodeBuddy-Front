import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavbarGrupo from "../GrupoDetails/componentsGrupo/NavbarGrupo";
import ContainerG from "../../components/container/ContainerG";
import styles from "./Historico.module.css";
import { Link } from "react-router-dom";

const Historico = () => {
  const { alunoId, grupoNome } = useParams();
  const [aluno, setAluno] = useState(null);
  const [grupo, setGrupo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAluno = async () => {
      try {
        const responseAluno = await fetch(`http://localhost:3000/alunos?id=${encodeURIComponent(alunoId)}`);
        const alunoData = await responseAluno.json();
        setAluno(alunoData[0] || null);
      } catch (error) {
        console.error('Error fetching aluno:', error);
      }
    };

    const fetchGrupo = async () => {
      try {
        const responseGrupo = await fetch(`http://localhost:3000/grupos?nome=${encodeURIComponent(grupoNome)}`);
        const grupoData = await responseGrupo.json();
        setGrupo(grupoData[0] || null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching grupo:', error);
        setLoading(false);
      }
    };

    fetchAluno();
    fetchGrupo();
  }, [alunoId, grupoNome]);

  return (
    <div>
      <Navbar />
      <ContainerG style={{ backgroundColor: "#4565B7" }}>
        <NavbarGrupo />
        <div className={styles.listaAlunos}>
          {loading ? (
            <p>Carregando...</p>
          ) : aluno && grupo ? (
            <div className={styles.alunoItem}>
              <div className={styles.infoItem}>
                <div className={styles.infoBox}>
                  <span className={styles.title}>NOME:</span>
                  <span className={styles.text}>{aluno.nome}</span>
                </div>
                <div className={styles.infoBox}>
                  <span className={styles.title}>GRUPO:</span>
                  <span className={styles.text}>{grupo.nome}</span>
                </div>
              </div>
              <div className={styles.desafiosList}>
                {grupo.desafios.length > 0 ? (
                  grupo.desafios.map((desafio) => (
                    <div key={desafio.id} className={styles.desafioItem}>
                      <div className={styles.alunoItem}>
                          <Link
                          to={`/Historico/${alunoId}/${encodeURIComponent(grupoNome)}/${encodeURIComponent(desafio.nome)}/resposta`}
                          className={styles.desafioLink}
                          >{desafio.nome}</Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Nenhum desafio disponível.</p>
                )}
              </div>
            </div>
          ) : (
            <p>Nenhuma informação disponível.</p>
          )}
        </div>
      </ContainerG>
    </div>
  );
};

export default Historico;
