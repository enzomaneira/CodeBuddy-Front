import React from "react";
import styles from "./ContainerG.module.css";

const ContainerG = ({ children, style }) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
};

export default ContainerG;
