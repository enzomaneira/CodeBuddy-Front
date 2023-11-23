import styles from "./Register.module.css";
import React, { useEffect } from "react";
<<<<<<< HEAD:codebuddy-repo/src/pages/Cadastro/Register.jsx
import ContainerM from "../../components/container/ContainerM"; // Certifique-se de importar ContainerP
=======
import ContainerP from "../../components/container/ContainerM"; // Certifique-se de importar ContainerP
>>>>>>> 3b4e7083dfd4ba1a307c64608fc6765354893c35:codebuddy-repo/src/pages/Register.jsx
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
