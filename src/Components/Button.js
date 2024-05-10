import React from "react";

const Button = ({ onClick, text, color,padding }) => {
  return (
    <button
      className={`px-3 py-1 rounded-md ml-auto ${padding} ${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
