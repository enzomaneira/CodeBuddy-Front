import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavbarGrupo from "../GrupoDetails/componentsGrupo/NavbarGrupo";
import ContainerG from "../../components/container/ContainerG";
import styles from "./Resposta.module.css";

const Resposta = () => {
  const { alunoId, grupoNome, desafioNome } = useParams();
  const [studentName, setStudentName] = useState("");
  const [response, setResponse] = useState("");
  const [grade, setGrade] = useState("");
  const [comments, setComments] = useState("");
  const [desafioId, setDesafioId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseDesafio = await fetch(`http://localhost:3000/desafios?nome=${encodeURIComponent(desafioNome)}`);
        const dataDesafio = await responseDesafio.json();
        if (dataDesafio.length > 0) {
          const desafio = dataDesafio[0];
          setDesafioId(desafio.id);
          const responseAluno = await fetch(`http://localhost:3000/alunos?id=${encodeURIComponent(alunoId)}`);
          const dataAluno = await responseAluno.json();
          const aluno = dataAluno[0];
          setStudentName(aluno.nome);
          const responseResposta = await fetch(`http://localhost:3000/respostas?aluno=${encodeURIComponent(alunoId)}&desafiop=${encodeURIComponent(desafio.id)}`);
          const dataResposta = await responseResposta.json();
          if (dataResposta.length > 0) {
            const resposta = dataResposta[0];
            setResponse(resposta.texto);
            setGrade(resposta.nota || "");
            setComments(resposta.comentario || "");
          }
        } else {
          console.error("Desafio não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [alunoId, grupoNome, desafioNome]);

  return (
    <div>
      <Navbar />
      <ContainerG className={styles.container} style={{ backgroundColor: "#4565B7" }}>
        <NavbarGrupo />
        <div className={styles.respostaContainer}>
          <h2>Resposta do Aluno {studentName}</h2>
          <div className={styles.infoBox}>
          </div>
          <div className={styles.infoBox}>
            <span className={styles.label}>Resposta:</span>
            <span className={`${styles.text} ${styles.destacado}`}>{response}</span>
          </div>
        </div>
        <div className={styles.notaComentariosContainer}>
          <div className={styles.infoBox}>
            <span className={styles.label}>Nota:</span>
            {grade ? <span className={styles.text}>{grade}</span> : <input type="text" placeholder="Atribuir nota" />}
          </div>
          <div className={styles.infoBox}>
            <span className={styles.label}>Comentários:</span>
            {comments ? (
              <span className={styles.text}>{comments}</span>
            ) : (
              <textarea placeholder="Adicionar comentário" rows={4} className={styles.commentInput} />
            )}
          </div>
        </div>
      </ContainerG>
    </div>
  );
};

export default Resposta;
