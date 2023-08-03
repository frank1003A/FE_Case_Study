import React from "react";
import { css } from "../../styled-system/css";

interface AbsoluteCenterProps {
  children: React.ReactNode;
}
const AbsoluteCenter = ({ children }: AbsoluteCenterProps) => {
  return (
    <div
      className={css({
        w: "100%",
        h: {
          lgTo2xl: "100%",
          mdDown: "100vh",
        },
        pos: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      {children}
    </div>
  );
};

export default AbsoluteCenter;
