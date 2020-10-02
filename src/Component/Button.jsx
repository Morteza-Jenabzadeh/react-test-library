import React from "react";

const Button = (props) => {
  const { children, disabled, ...rest } = props;

  return (
    <button
      disabled={disabled}
      autoFocus={rest.autoFocus}
      onClick={rest.onClick}
      type={rest.type}
      onFocus={rest.onFocus}
    >
      {children}
    </button>
  );
};
export default Button;
