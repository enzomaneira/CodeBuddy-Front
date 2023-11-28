import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ContainerG from "../../components/container/ContainerG";
import Navbar from "../../components/Navbar";
import styles from "./Desafios.module.css";
import backarrow from "../../img/backarrow.png";

const Desafios = () => {
  const { grupoNome } = useParams();
  const [desafios, setDesafios] = useState([]);

  useEffect(() => {
    const fetchDesafios = async () => {
      try {
        const responseGrupos = await fetch(`http://localhost:3000/grupos?nome=${encodeURIComponent(grupoNome)}`);
        const dataGrupos = await responseGrupos.json();
        const grupo = dataGrupos[0];
        if (grupo) {
          const responseDesafios = await fetch(`http://localhost:3000/Desafios?grupoId=${encodeURIComponent(grupo.id)}`);
          const dataDesafios = await responseDesafios.json();
          setDesafios(dataDesafios || []);
        } else {
          console.warn(`Grupo não encontrado com o nome ${grupoNome}`);
        }
      } catch (error) {
        console.error('Error fetching desafios:', error);
      }
    };

    fetchDesafios();
  }, [grupoNome]);

  return (
    <div>
      <Navbar />
      <ContainerG style={{ backgroundColor: "orange" }}>
        <div className={styles.title}>
          Desafios - Grupo {grupoNome}
          <Link to="/profile" className={`${styles.img} img`}>
            <img src={backarrow} alt="Back Arrow" />
          </Link>
        </div>
        <div className={`${styles.desafiosList} ${styles.desafiosContainer}`}>
          {desafios.map(desafio => (
            <div key={desafio.id} className={styles.desafioItem}>
              <Link to={`/Desafios/${encodeURIComponent(grupoNome)}/${encodeURIComponent(desafio.nome)}`}>
                {desafio.nome}
              </Link>
            </div>
          ))}
        </div>
      </ContainerG>
    </div>
  );
};

export default Desafios;
