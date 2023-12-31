import { ReactNode } from "react";
import { css } from "../../../../../styled-system/css";
import { BreakpointToken } from "../../../../../styled-system/tokens";

interface ChartCardProps {
  children: ReactNode;
  bgColor?: string;
  hideBelow?: BreakpointToken;
}

const ChatCard = ({ children, bgColor, hideBelow }: ChartCardProps) => {
  return (
    <div
      className={css({
        hideBelow: hideBelow,
        bgColor: bgColor ? bgColor : "white",
        display: "flex",
        flexDir: "column",
        padding: "0px",
        flex: "1 0 0",
        flexShrink: "0",
        borderRadius: "12px",
        overflow: "hidden",
        h: {
          lgTo2xl: "auto",
          mdDown: "100%",
        },
        minW: "300px",
      })}
    >
      {children}
    </div>
  );
};

export default ChatCard;
