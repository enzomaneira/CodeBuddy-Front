import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ContainerG from "../../components/container/ContainerG";
import styles from "./GrupoDetails.module.css";
import Posts from "./posts/Posts"

const GrupoDetails = () => {

return (
    <div>
    <div>
        <Navbar/>
    </div>
    <div>
        <ContainerG>
            <div className={styles.title}>Grupo XXX</div>
            <div>
                <Posts/>
                </div>
        </ContainerG>
    </div>
    </div>
);

};

export default GrupoDetails;
