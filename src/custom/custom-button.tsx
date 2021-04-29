import React from "react";
import "./custom-button.css";

const STYLES = ["btn--primary", "btn--round", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const CustomButton = ({
  children,
  type,
  buttonStyle,
  buttonSize,
}: {
  children: any;
  type: any;
  buttonStyle: string;
  buttonSize: string;
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;
