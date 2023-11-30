import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./PopupGPT.module.css";

const PopupGPT = ({ onClose }) => {
  const [textoSuperior, setTextoSuperior] = useState("");
  const [resposta, setResposta] = useState("");

  const handleFechar = () => {
    onClose();
  };

  const handleEnviarResposta = () => {
    console.log("Texto Superior:", textoSuperior);
    console.log("Resposta:", resposta);
    setTextoSuperior("");
    setResposta("");
    onClose();
  };

  return (
    <div className={styles.popup}>
      <button className={styles.closeButton} onClick={handleFechar}>X</button>
      

      <div className={styles.textoSuperior}>
        <textarea
          placeholder="Digite aqui..."
          value={textoSuperior}
          onChange={(e) => setTextoSuperior(e.target.value)}
        />
      </div>
      <div className={styles.resposta}>
        <div className={styles.respostaTexto}>{resposta}</div>
      </div>
      <div className={styles.botoes}>
        <button onClick={handleEnviarResposta}>Enviar</button>
      </div>
    </div>
  );
  
};

PopupGPT.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopupGPT;
