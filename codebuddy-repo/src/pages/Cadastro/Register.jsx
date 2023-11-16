import styles from "./Register.module.css";
import React, { useEffect } from "react";
import ContainerM from "../../components/container/ContainerM"; // Certifique-se de importar ContainerP
import Footer from "../../components/Footer";
import CadastroForm from "../../components/form/CadastroForm";
import WhiteBall from "../../components/form/WhiteBall";

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
        <WhiteBall className={styles.whiteBall} />
            <ContainerM>
                <CadastroForm/>
            </ContainerM>
        </div>
        <Footer />
        </div>
    );
}

export default Register;
