import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./DesafioResolver.module.css";
import send from "../../img/sendResolver.png"
import back from "../../img/backResolver.png"
import gpt from "../../img/gpt.png"
import BotaoResolver from "./componentesResolver/BotaoResolver";

const DesafioResolver = () => {
  const { grupoNome, desafioNome } = useParams();
  const navigateTo = useNavigate();

  const getSavedState = () => {
    const savedState = localStorage.getItem("desafioState");
    return savedState ? JSON.parse(savedState) : null;
  };

  const saveState = (state) => {
    localStorage.setItem("desafioState", JSON.stringify(state));
  };

  const [grupo, setGrupo] = useState(null);
  const [desafio, setDesafio] = useState(getSavedState() || {
    nome: "Nome do Desafio",
    texto: "Texto do Desafio...",
  });

  useEffect(() => {
    const fetchGrupo = async () => {
      try {
        const responseGrupos = await fetch(`http://localhost:3000/grupos?nome=${encodeURIComponent(grupoNome)}`);
        const dataGrupos = await responseGrupos.json();
        const grupoEncontrado = dataGrupos[0];

        if (grupoEncontrado) {
          setGrupo(grupoEncontrado);
        } else {
          console.warn(`Grupo não encontrado com o nome ${grupoNome}`);
        }
      } catch (error) {
        console.error('Error fetching grupo:', error);
      }
    };

    const fetchDesafio = async () => {
      try {
        if (grupo) {
          const responseDesafio = await fetch(`http://localhost:3000/Desafios?grupoId=${encodeURIComponent(grupo.id)}&nome=${encodeURIComponent(desafioNome)}`);
          const dataDesafio = await responseDesafio.json();
          const desafioEncontrado = dataDesafio[0];

          if (desafioEncontrado) {
            setDesafio(desafioEncontrado);
            saveState(desafioEncontrado);
          } else {
            console.warn(`Desafio não encontrado com o nome ${desafioNome}`);
          }
        }
      } catch (error) {
        console.error('Error fetching desafio:', error);
      }
    };

    fetchGrupo();
    fetchDesafio();
  }, [grupoNome, desafioNome]);

  const handleVoltarClick = () => {
    navigateTo(`/Desafios/${encodeURIComponent(grupoNome)}/${encodeURIComponent(desafioNome)}`);
  };

  return (
    <div className={styles.desafioResolver}>
      <div className={styles.exercicioTexto}>
        {grupo && desafio && (
          <>
            <div className={styles.grupo}>Grupo: {grupo.nome}</div>
            <div className={styles.desafio}>Desafio: {desafio.nome}</div>
            <div className={styles.textoDesafio}>Texto do Desafio: {desafio.texto}</div>
          </>
        )}
      </div>
      <div>
        <textarea className={styles.editorTexto} placeholder="Digite aqui..." />
      </div>
      <div className={styles.botoesContainer}>
        <BotaoResolver imagemSrc={send} />
        <BotaoResolver imagemSrc={back} onClick={handleVoltarClick} />
        <BotaoResolver imagemSrc={gpt} />
      </div>
    </div>
  );
};

export default DesafioResolver;
