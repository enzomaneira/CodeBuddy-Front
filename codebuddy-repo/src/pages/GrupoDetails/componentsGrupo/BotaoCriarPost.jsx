import React from "react";
import PropTypes from "prop-types";
import styles from "./BotaoCriarPost.module.css";

const BotaoCriarPost = ({ onClick }) => {
  const handleClick = () => {
    console.log("Botão Criar Post clicado"); 
    onClick && onClick(); 
  };

  return (
    <button className={styles.botaoCriarPost} onClick={handleClick}>
      <div className={styles.text}>+</div>
    </button>
  );
};

BotaoCriarPost.propTypes = {
  onClick: PropTypes.func,
};

export default BotaoCriarPost;
