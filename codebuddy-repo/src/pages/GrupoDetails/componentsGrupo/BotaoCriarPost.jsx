import React from "react";
import PropTypes from "prop-types";
import styles from "./BotaoCriarPost.module.css";

const BotaoCriarPost = ({ onClick }) => {
  return (
    <button className={styles.botaoCriarPost} onClick={onClick}>
    <div className={styles.text}>+</div>
    </button>
  );
};

BotaoCriarPost.propTypes = {
  onClick: PropTypes.func,
};

export default BotaoCriarPost;
