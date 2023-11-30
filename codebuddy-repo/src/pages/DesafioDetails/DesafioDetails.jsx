import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContainerG from "../../components/container/ContainerG";
import Navbar from "../../components/Navbar";
import styles from "./DesafioDetails.module.css"; 
import NavbarDesafio from "./componentsDesafio/NavbarDesafio";
import BotaoDesafio from "./componentsDesafio/BotaoDesafio";

const DesafioDetails = () => {
  const { grupoNome, desafioNome } = useParams();
  const [desafio, setDesafio] = useState({
    nome: "Nome do Desafio",
    texto: "Texto do Desafio...",
  });

  const navigateTo = useNavigate();


  useEffect(() => {
    const fetchDesafio = async () => {
      try {
        const responseGrupos = await fetch(`http://localhost:3000/grupos?nome=${encodeURIComponent(grupoNome)}`);
        const dataGrupos = await responseGrupos.json();
        const grupo = dataGrupos[0];

        if (grupo) {
          const responseDesafio = await fetch(`http://localhost:3000/Desafios?grupoId=${encodeURIComponent(grupo.id)}&nome=${encodeURIComponent(desafioNome)}`);
          const dataDesafio = await responseDesafio.json();
          const desafioEncontrado = dataDesafio[0];

          if (desafioEncontrado) {
            setDesafio(desafioEncontrado);
          } else {
            console.warn(`Desafio não encontrado com o nome ${desafioNome}`);
          }
        } else {
          console.warn(`Grupo não encontrado com o nome ${grupoNome}`);
        }
      } catch (error) {
        console.error('Error fetching desafio:', error);
      }
    };

    fetchDesafio();
  }, [grupoNome, desafioNome, navigateTo]);

  const handleBotaoDesafioClick = () => {
    navigateTo(`/Desafios/${encodeURIComponent(grupoNome)}/${encodeURIComponent(desafioNome)}/resolver`);
  };

  return (
    <div>
      <Navbar />
      {desafio && (
        <ContainerG style={{ backgroundColor: "orange" }}>
          <NavbarDesafio/>

          <div className={styles.desafioContent}>
            <h2>{desafio.nome}</h2>
            <p>{desafio.texto}</p>
          </div>
          <BotaoDesafio onClick={handleBotaoDesafioClick} />
        </ContainerG>
      )}
    </div>
  );
};

export default DesafioDetails;
