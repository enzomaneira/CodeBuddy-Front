import React from "react";
import styles from "./TextContainer.module.css";
import PropTypes from "prop-types";

function TextContainer(props) {
  return (
    <div style={props.style}>
      <div className={styles.container}>
        {props.texto}
      </div>
    </div>
  );
}

TextContainer.propTypes = {
  texto: PropTypes.string.isRequired,
  style: PropTypes.object, // Aceita um objeto de estilos
};

export default TextContainer;
