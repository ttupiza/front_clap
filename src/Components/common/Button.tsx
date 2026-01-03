import { Link } from "react-router-dom";

interface Props {
  text: string;
  to?: string;
  type?: "button" | "submit";
  className?: string;
}

const Button = ({ text, to = "#", type = "button", className = "" }: Props) => {
  const estilo = `custom-button-react ${className}`;

  // Si es tipo submit, es un botón. Si no, es un Link (que por defecto va a #)
  return type === "submit" ? (
    <button type="submit" className={estilo}>{text}</button>
  ) : (
    <Link to={to} className={estilo}>{text}</Link>
  );
};

export default Button;