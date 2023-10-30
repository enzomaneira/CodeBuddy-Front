import React from "react";
import styles from "./ContainerP.module.css";

const ContainerP = ({ children, backgroundColor }) => {
  const containerStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className={styles.container} style={containerStyle}>
      {children}
    </div>
  );
};

export default ContainerP;
