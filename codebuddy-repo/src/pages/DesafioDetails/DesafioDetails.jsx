import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContainerG from "../../components/container/ContainerG";
import Navbar from "../../components/Navbar";
import styles from "./DesafioDetails.module.css"; 
import backarrow from "../../img/backarrow.png";
import { Link } from "react-router-dom";
import NavbarDesafio from "./componentsDesafio/NavbarDesafio";

const DesafioDetails = () => {
    const { grupoNome, desafioNome } = useParams();
    const [desafio, setDesafio] = useState(null);
    
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
    }, [grupoNome, desafioNome]);
    

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
        </ContainerG>
    )}
    </div>
);
};

export default DesafioDetails;
