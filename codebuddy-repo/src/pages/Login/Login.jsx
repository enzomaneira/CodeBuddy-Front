import React, { useEffect } from "react";
<<<<<<< HEAD:codebuddy-repo/src/pages/Login/Login.jsx
import ContainerM from "../../components/container/ContainerM";
=======
import ContainerP from "../../components/container/ContainerM";
>>>>>>> 3b4e7083dfd4ba1a307c64608fc6765354893c35:codebuddy-repo/src/pages/Login.jsx
import styles from "./Login.module.css";
import Footer from "../../components/Footer";
import LoginForm from "../../components/form/LoginForm";
import WhiteBall from "../../components/form/WhiteBall";

const Login = () => {
  useEffect(() => {
    document.body.classList.add(styles.loginBackground);
    return () => {
      document.body.classList.remove(styles.loginBackground);
    };
  });

  return (
    <div className={styles.body}>
      <div className={styles.centeredContainer}>
        <WhiteBall className={styles.whiteBall} />
        <ContainerM>
          <LoginForm />
        </ContainerM>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
