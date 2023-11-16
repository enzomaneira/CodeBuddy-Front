import React from "react";
import styles from "./TextContainer.module.css";

function TextContainer(props) {
  return (
    <div>
      <div className={styles.container}>
        {props.texto}
      </div>
    </div>
  );
}

export default TextContainer;
