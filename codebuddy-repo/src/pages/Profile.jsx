import React from "react";
import ContainerP from "../components/ContainerP";
import WhiteBall from "../components/form/WhiteBall";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.page}>
      <ContainerP backgroundColor="orange" className={styles.container}>
      <WhiteBall className={styles.whiteBall} />
        <h2>Profile</h2>
      </ContainerP>
    </div>
  );
}

export default Profile;
