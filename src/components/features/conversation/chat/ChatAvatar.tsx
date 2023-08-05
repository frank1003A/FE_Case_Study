"use client";
import Image from "next/image";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { css } from "../../../../../styled-system/css";

interface ChatAvatarProps {
  src: string;
  active?: boolean;
  now?: boolean;
}
const ChatAvatar = ({ src, active, now }: ChatAvatarProps) => {
  const [load, setLoaded] = useState(true);

  return (
    <div className={css({ pos: "relative" })}>
      {load ? (
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pos: "absolute",
            top: "0",
            left: "0",
            w: "100%",
            h: "100%",
            bgColor: "inherit",
            zIndex: "2",
          })}
        >
          <ClipLoader color="#5570F1" size={30} />
        </div>
      ) : (
        ""
      )}
      <div
        className={css({
          pos: "relative",
          flexShrink: "0",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "#F1F3F9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1",
          opacity: load ? "0" : "1",
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
          loading="eager"
          onLoad={() => setLoaded(false)}
          className={css({
            borderRadius: "8px",
            width: "auto",
            height: "auto",
          })}
        />
      </div>
    </div>
  );
};

export default ChatAvatar;
