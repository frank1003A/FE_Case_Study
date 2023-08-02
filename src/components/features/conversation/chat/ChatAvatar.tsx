import Image from "next/image";
import { css } from "../../../../../styled-system/css";

interface ChatAvatarProps {
  src: string;
  active?: boolean;
  now?: boolean;
}
const ChatAvatar = ({ src, active, now }: ChatAvatarProps) => {
  return (
    <div
      className={css({
        pos: "relative",
        flexShrink: "0",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "#F1F3F9",
      })}
    >
      <span
        className={css({
          position: "absolute",
          right: "-3px",
          top: "-3px",
          w: "12px",
          h: "12px",
          flexShrink: "0",
          border: "2px solid",
          borderColor: "#F7F7FC",
          bgColor: active || now ? "primary" : "#C4CAE8",
          borderRadius: "100%",
        })}
      ></span>
      <Image
        src={src}
        alt={`user_${src}`}
        width={48}
        height={48}
        className={css({
          borderRadius: "8px",
          width: "auto",
          height: "auto",
        })}
      />
    </div>
  );
};

export default ChatAvatar;
