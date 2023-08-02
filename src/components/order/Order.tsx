import Image from "next/image";
import { css } from "../../../styled-system/css";

interface OrderProps {
  item: { img: string; name: string; amt: string };
  date: string;
  status: "pending" | "complete";
}
const Order = ({ item, date, status }: OrderProps) => {
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "14px",
        p: "8px 2px",
        borderBottom: "1px solid #F1F3F9",
        mb: "10px",
        _hover: {
          bgColor: "#F7F7FC",
        },
        cursor: "pointer",
      })}
    >
      <Image
        src={item.img}
        alt={`${item.name}`}
        width={40}
        height={40}
        className={css({
          border: "1px solid #F1F3F9",
          borderRadius: "8px",
          height: "auto",
          width: "auto",
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
          alignItems: "flex-start",
          justifyContent: "space-around",
        })}
      >
        <span
          className={css({
            maxW: "100px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            color: "#8B8D97",
            fontSize: "12px",
            fontStyle: "normal",
            lineHeight: "normal",
            fontWeight: "400",
          })}
        >
          {date}
        </span>
        <span
          className={css({
            display: "flex",
            p: "2px 15px",
            alignItems: "center",
            borderRadius: "8px",
            bgColor:
              status === "pending"
                ? "rgba(245, 126, 119, 0.12)"
                : "rgba(50, 147, 111, 0.12)",
            color: status === "pending" ? "#CC5F5F" : "#519C66",
            fontSize: "14px",
            fontStyle: "normal",
            lineHeight: "normal",
            fontWeight: "400",
          })}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default Order;
