// Desafios.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ContainerG from "../../components/container/ContainerG";
import Navbar from "../../components/Navbar";
import styles from "./Desafios.module.css";

const Desafios = () => {
  const { grupoNome } = useParams();
  const [desafios, setDesafios] = useState([]);

  useEffect(() => {
    const fetchDesafios = async () => {
        try {
          const response = await fetch(`http://localhost:3000/Desafios?grupo.nome=${encodeURIComponent(grupoNome)}`);
          const data = await response.json();
          setDesafios(data || []);
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
        <div className={styles.title}>Desafios - Grupo {grupoNome}</div>
        <ul className={styles.desafiosList}>
          {desafios.map(desafio => (
            <li key={desafio.id} className={styles.desafioItem}>
              <Link to={`/Desafios/${encodeURIComponent(desafio.nome)}`}>
                {desafio.nome}
              </Link>
            </li>
          ))}
        </ul>
      </ContainerG>
    </div>
  );
};

export default Desafios;
