import { ReactNode } from "react";
import { css } from "../../../../../styled-system/css";

interface ConversationCardProps {
  children: ReactNode;
  bgColor?: string;
}

const ConversationCard = ({ children, bgColor }: ConversationCardProps) => {
  return (
    <div
      className={css({
        bgColor: bgColor ? bgColor : "white",
        display: "flex",
        flexDir: "column",
        padding: "22px 0px",
        gap: "10px",
        flex: "1 0 0",
        flexShrink: "0",
        borderRadius: "12px",
        h: "auto",
        overflow: "hidden",
        maxW: {
          lgOnly: "400px",
          mdDown: "none",
        },
      })}
    >
      {children}
    </div>
  );
};

export default ConversationCard;
