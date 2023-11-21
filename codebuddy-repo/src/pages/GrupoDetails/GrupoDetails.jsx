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
        <ContainerG>Grupo XXXX</ContainerG>
        <div><Posts/></div>
    </div>
    </div>
);

};

export default GrupoDetails;
