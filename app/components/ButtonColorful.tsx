import React from "react";
import "../water.scss";
const Button = ({ text, onClick, className ,children}: { text: string; onClick: () => void; className: string ,children?:React.ReactNode}) => {
  return (
    <button onClick={onClick} className={`${className} box`}>
      <span>{text}</span>
      <i></i>
      {children}
    </button>
  );
};

export default Button;
