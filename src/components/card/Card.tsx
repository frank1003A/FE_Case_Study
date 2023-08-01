import { ReactNode } from "react";
import { css } from "../../../styled-system/css";
import { Property } from "../../../styled-system/types/csstype";

interface CardProps {
  children: ReactNode;
  gridRow?: Property.GridRow;
  gridColumn?: Property.GridColumn;
  bgColor?: string;
}
const Card = ({ children, gridRow, gridColumn, bgColor }: CardProps) => {
  return (
    <div
      className={css({
        bgColor: bgColor ? bgColor : "white",
        display: "flex",
        flexDir: "column",
        padding: "11px 15px",
        gap: "35px",
        flexShrink: "0",
        borderRadius: "12px",
        gridRow: gridRow,
        gridColumn: gridColumn,
        overflowY: "hidden",
        overflowX: "hidden",
        width: {
          mdDown: "100%",
        },
        pos: "relative",
        /**gridRow: {
          lgTo2xl: gridRow,
          mdDown: "5",
        },
        gridColumn: {
          lgTo2xl: gridColumn,
          mdDown: "1fr",
        }, */
      })}
    >
      {children}
    </div>
  );
};

export default Card;
