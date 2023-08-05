import React from "react";
import { css } from "../../../styled-system/css";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        bgColor: "primary",
        flexShrink: "0",
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: "normal",
        textAlign: "center",
        padding: "14px 16px",
        borderRadius: "12px",
        cursor: "pointer",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
