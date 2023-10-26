import React, { useEffect } from "react";
import ContainerP from "../components/ContainerP";
import styles from "./Login.module.css";
import Footer from "../components/Footer";
import LoginForm from "../components/form/LoginForm";


const Login = () => {
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
            <LoginForm/>
        </ContainerP>
    </div>
    <Footer />
    </div>
);
}

export default Login;