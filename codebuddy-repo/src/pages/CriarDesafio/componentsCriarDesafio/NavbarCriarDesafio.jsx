import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./NavbarCriarDesafio.module.css";
import backarrow from "../../../img/backarrow.png";


const NavbarCriarDesafio = ({ title, backButton }) => {
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
    <nav className={styles.navbar}>
        <span>{title}</span>
      {backButton && (
        <div className={styles.img}>
        <Link to={`/Desafios/${encodeURIComponent(grupoNome)}`} className={styles.link}>
          <img src={backarrow} alt="Back Arrow" />
        </Link>
      </div>
      )}
    </nav>
);
};

export default NavbarCriarDesafio;
