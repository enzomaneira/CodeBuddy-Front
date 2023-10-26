import React from "react";
import styles from "./ContainerP.module.css";

const ContainerP = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default ContainerP;
