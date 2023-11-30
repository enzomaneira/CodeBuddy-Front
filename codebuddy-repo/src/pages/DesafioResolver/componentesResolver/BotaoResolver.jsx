import React, { useState } from "react";
import PropTypes from "prop-types";
import PopupGPT from "./PopupGPT";

const BotaoResolver = ({ imagemSrc, onClick }) => {
  const [popupAberto, setPopupAberto] = useState(false);

  const handleAbrirPopup = () => {
    setPopupAberto(true);
  };

  const handleFecharPopup = () => {
    setPopupAberto(false);
  };

  return (
    <>
      <button
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "white",
          border: "none",
          padding: "0",
          margin: "0",
        }}
        onClick={onClick || handleAbrirPopup}
      >
        <img src={imagemSrc} alt="Botão Resolver" style={{ width: "80%", height: "80%" }} />
      </button>
      {popupAberto && imagemSrc.includes("gpt") && (
        <PopupGPT onClose={handleFecharPopup} />
      )}
    </>
  );
};

BotaoResolver.propTypes = {
  imagemSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default BotaoResolver;
