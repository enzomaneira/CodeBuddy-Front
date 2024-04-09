import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Adicionando o import do Link
import Navbar from "../../components/Navbar";
import NavbarGrupo from "../GrupoDetails/componentsGrupo/NavbarGrupo";
import ContainerG from "../../components/container/ContainerG";
import styles from "./ListaAlunos.module.css";

const ListaAlunos = () => {
  const { grupoNome } = useParams();
  const [alunosDoGrupo, setAlunosDoGrupo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlunosDoGrupo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/grupos?nome=${encodeURIComponent(grupoNome)}`);
        const data = await response.json();
        const grupo = data[0];
        if (grupo) {
          const alunosNomes = await Promise.all(grupo.alunoId.map(async alunoId => {
            const responseAluno = await fetch(`http://localhost:3000/alunos/${alunoId}`);
            const alunoData = await responseAluno.json();
            return { id: alunoId, nome: alunoData.nome }; // Retorna um objeto com id e nome do aluno
          }));
          setAlunosDoGrupo(alunosNomes || []);
        } else {
          console.warn(`Grupo não encontrado com o nome ${grupoNome}`);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching alunos:', error);
        setLoading(false);
      }
    };

    fetchAlunosDoGrupo();
  }, [grupoNome]);

  return (
    <div>
      <Navbar />
      <ContainerG style={{ backgroundColor: "#4565B7" }}>
        <NavbarGrupo />
        <div className={styles.listaAlunos}>
          {loading ? (
            <p>Carregando...</p>
          ) : alunosDoGrupo.length > 0 ? (
            alunosDoGrupo.map((aluno, index) => ( // Alterando para receber aluno ao invés de alunoNome
              <div key={index} className={styles.alunoItem}>
                <Link to={`/Historico/${aluno.id}`}>{aluno.nome}</Link> {/* Corrigindo o link */}
              </div>
            ))
          ) : (
            <p>Nenhum aluno encontrado.</p>
          )}
        </div>
      </ContainerG>
    </div>
  );
};

export default ListaAlunos;
