import React, { useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Navbar from "../../components/Navbar";
import ContainerG from "../../components/container/ContainerG";
import styles from "./GrupoDetails.module.css";
import Posts from "./posts/Posts"

const GrupoDetails = () => {

    const {nome} = useParams();

return (
    <div>
    <div>
        <Navbar/>
    </div>
    <div>
        <ContainerG >
            <div className={styles.title}>Grupo {nome}</div>
            <div className={styles.post}>
                <Posts/>
            </div>
                <Posts/>
        </ContainerG>
    </div>
    </div>
);

};

export default GrupoDetails;
