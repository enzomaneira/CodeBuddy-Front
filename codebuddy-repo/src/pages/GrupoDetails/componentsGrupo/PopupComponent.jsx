import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./PopupComponent.module.css";

const PopupComponent = ({ onClose, onSend }) => {
  const [text, setText] = useState("");

  const handleClose = () => {
    setText(""); 
    onClose();
  };

  const handleSend = () => {

    onSend(text);
    handleClose(); 
  };

  return (
    <div className={styles.popup}>
      <div className={styles.closeButton} onClick={handleClose}>
        X
      </div>
      <textarea
        placeholder="Digite aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textarea}
      />
      <button className={styles.sendButton} onClick={handleSend}>
        Enviar
      </button>
    </div>
  );
};

PopupComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default PopupComponent;
