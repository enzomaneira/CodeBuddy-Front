import React from "react";
import styles from "./ContainerM.module.css";

const ContainerM = ({ children, backgroundColor }) => {
  const containerStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className={styles.container} style={containerStyle}>
      {children}
    </div>
  );
};

export default ContainerM;