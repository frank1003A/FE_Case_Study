import Image from "next/image";
import { css } from "../../../../../styled-system/css";

interface ChatBubbleProps {
  variant: "customer" | "cca";
  item?: { img: string; name: string; amt: string; inStock: string };
  time: string;
  content: string;
}
const ChatBubble = ({ variant, item, time, content }: ChatBubbleProps) => {
  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        justifyContent: variant === "customer" ? "flex-start" : "flex-end",
        alignItems: variant === "customer" ? "flex-start" : "flex-end",
        w: "100%",
      })}
    >
      {item ? (
        <div
          className={css({
            display: "flex",
            gap: "14px",
            p: "8px 0px",
            borderBottom: "1px solid #F1F3F9",
            mb: "10px",
          })}
        >
          <Image
            src={item.img}
            alt={`${item.name}`}
            width={49}
            height={49}
            className={css({
              border: "1px solid #F1F3F9",
              borderRadius: "8px",
            })}
          />
          <div
            className={css({
              display: "flex",
              flexDir: "column",
              h: "100%",
              alignItems: "flex-start",
              justifyContent: "space-around",
            })}
          >
            <span
              className={css({
                fontSize: "14px",
                fontStyle: "normal",
                lineHeight: "normal",
                fontWeight: "400",
                color: "#45464E",
              })}
            >
              {item.name}
            </span>
            <span
              className={css({
                color: "#33343A",
                fontSize: "14px",
                fontStyle: "normal",
                lineHeight: "normal",
                fontWeight: "500",
              })}
            >
              {item.amt}
            </span>
          </div>
          <div
            className={css({
              display: "flex",
              flexDir: "column",
              h: "100%",
              alignItems: "baseline",
              justifyContent: "space-around",
            })}
          >
            <span
              className={css({
                fontSize: "12px",
                fontStyle: "normal",
                lineHeight: "normal",
                fontWeight: "500",
                color: "#A6A8B1",
              })}
            >
              <span className={css({ color: "primary" })}>{item.inStock}</span>{" "}
              In Stock
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={css({
          borderRadius:
            variant === "customer"
              ? "16px 16px 16px 0px"
              : "16px 16px 0px 16px",
          bgColor: variant === "customer" ? "primary" : "#FFEAD1",
          padding: "16px",
          maxW: "50%",
          w: "50%",
          display: "flex",
          alignItems: "center",
          color: variant === "customer" ? "white" : "#1C1D22",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
        })}
      >
        {content}
      </div>
      <div
        className={css({
          maxW: "50%",
          w: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: variant === "customer" ? "flex-start" : "flex-end",
        })}
      >
        <span
          className={css({
            maxW: "100px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            color: "#8B8D97",
          })}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;
