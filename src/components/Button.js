import React from "react";

import "./Button.css";

import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZE = ["btn--medium", "btn--large"];

const Button = ({ buttonStyle, buttonSize, children , addStyle }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <Link to="/sign-up">
      <button className={`btn ${addStyle} ${checkButtonStyle} ${checkButtonSize}`}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
