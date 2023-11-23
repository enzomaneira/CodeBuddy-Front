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

<<<<<<< HEAD:codebuddy-repo/src/components/container/ContainerM.jsx
export default ContainerM;
=======
export default ContainerM;
>>>>>>> 3b4e7083dfd4ba1a307c64608fc6765354893c35:codebuddy-repo/src/components/ContainerP.jsx
