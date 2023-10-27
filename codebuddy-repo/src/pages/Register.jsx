import styles from "./Register.module.css";
import React, { useEffect } from "react";
import ContainerP from "../components/ContainerP"; // Certifique-se de importar ContainerP
import Footer from "../components/Footer";
import CadastroForm from "../components/form/CadastroForm";

const Register = () => {
    useEffect(() => {
        document.body.classList.add(styles.loginBackground);
        return () => {
        document.body.classList.remove(styles.loginBackground);
        };
    }, []);
    return (
        <div className={styles.body}>
        <div className={styles.centeredContainer}>
            <ContainerP>
                <CadastroForm/>
            </ContainerP>
        </div>
        <Footer />
        </div>
    );
}

export default Register;
