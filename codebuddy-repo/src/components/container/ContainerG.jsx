import React from "react";
import styles from "./ContainerG.module.css";

const ContainerG = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default ContainerG;
