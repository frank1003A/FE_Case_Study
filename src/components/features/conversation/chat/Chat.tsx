import { css } from "../../../../../styled-system/css";
import ChatAvatar from "./ChatAvatar";

interface ChatProps {
  src: string;
  now?: boolean;
  active?: boolean;
  onClick?: () => void;
}
const Chat = ({ src, now, active, onClick }: ChatProps) => {
  return (
    <div
      className={css({
        w: "100%",
        //borderRight: "4px solid transparent",
        borderRight:
          active && active === true
            ? "4px solid #5570F1"
            : "4px solid transparent",
        bgColor: active ? "#F7F7FC" : "transparent",
        display: "flex",
        padding: "12px 16px",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "14px",
        _hover: {
          bgColor: "#F7F7FC",
        },
        cursor: "pointer",
        pos: "relative",
        transition: "all .3s ease-in-out",
      })}
      onClick={onClick}
    >
      <ChatAvatar src={src} active={active} now={now} />

      <div
        className={css({
          display: "flex",
          flexDir: "column",
          w: "100%",
        })}
      >
        <span
          className={css({
            fontSize: "16px",
            fontWeight: "500",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#45464E",
            maxW: "150px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          })}
        >
          Jane Doe
        </span>

        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            w: "100%",
            fontSize: "14px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#8B8D97",
          })}
        >
          <span
            className={css({
              maxW: {
                lgTo2xl: "230px",
                mdDown: "140px",
              },
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            })}
          >
            Hi, i want make enquiries about yo...
          </span>
          <span
            className={css({
              maxW: "100px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            })}
          >
            12:55 am
          </span>
        </div>
      </div>

      {now ? (
        <span
          className={css({
            pos: "absolute",
            top: "10px",
            right: "10px",
            display: "flex",
            alignItems: "center",
            p: "2px 7px",
            borderRadius: "8px",
            bgColor: "#FEF5EA",
            fontSize: "12px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "normal",
          })}
        >
          new
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
