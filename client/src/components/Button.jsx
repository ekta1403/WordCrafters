import React from "react";
// import "../style/Button.css";

const Button = ({ text, onClick, type = "button", style = {}, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
