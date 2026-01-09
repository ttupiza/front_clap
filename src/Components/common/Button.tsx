import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  to?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, to = "#", type = "button", className = "", onClick }: Props) => {
  const estilo = `custom-button-react ${className}`;

  if (type === "submit") {
    return (
      <button type="submit" className={estilo}>
        {text}
      </button>
    );
  }

  // Si se pasó onClick o es tipo button, renderizamos un botón con onClick
  if (onClick || type === "button") {
    return (
      <button type="button" className={estilo} onClick={onClick}>
        {text}
      </button>
    );
  }

  // Por defecto, renderizar un Link
  return <Link to={to} className={estilo}>{text}</Link>;
};

export default Button;