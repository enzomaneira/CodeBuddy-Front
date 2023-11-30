import React from "react";
import PropTypes from "prop-types";

const BotaoResolver = ({ imagemSrc, onClick }) => {
  return (
    <button
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        border: "none",
        padding: "0",
        margin: "0",
      }}
      onClick={onClick}
    >
      <img src={imagemSrc} alt="Botão Resolver" style={{ width: "80%", height: "80%" }} />
    </button>
  );
};

BotaoResolver.propTypes = {
  imagemSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default BotaoResolver;
