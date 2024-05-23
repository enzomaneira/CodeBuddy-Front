import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavbarGrupo from "./components/NavbarLista";
import ContainerG from "../../components/container/ContainerG";
import styles from "./ListaAlunos.module.css";
import { Link } from "react-router-dom";

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
            return { id: alunoId, nome: alunoData.nome };
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
        <NavbarGrupo grupoNome={grupoNome} />
        <div className={styles.listaAlunos}>
          {loading ? (
            <p>Carregando...</p>
          ) : alunosDoGrupo.length > 0 ? (
            alunosDoGrupo.map((aluno, index) => (
              <div key={index} className={styles.alunoItem}>
                <Link to={`/Historico/${aluno.id}/${encodeURIComponent(grupoNome)}`} className={styles.groupLink}>{aluno.nome}</Link>
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
