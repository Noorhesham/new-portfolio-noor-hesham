import React from "react";
import "../water.scss";
const Button = ({
  text,
  onClick,
  className,
  children,
  disabled,
}: {
  text: string;
  onClick: () => any;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`${className} box`}>
      <span>{text}</span>
      <i></i>
      {children}
    </button>
  );
};

export default Button;
