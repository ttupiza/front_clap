import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  text?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ text, className, type = 'button', to, onClick, children }) => {
  if (to) {
    return (
      <Link to={to} className={className}>
        {text ?? children}
      </Link>
    );
  }
  return (
    <button type={type} className={className} onClick={onClick}>
      {text ?? children}
    </button>
  );
};

export default Button;