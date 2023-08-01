"use client";
import Image from "next/image";
import { css } from "../../../styled-system/css";

interface AvatarProps {
  src: string;
}
const Avatar = ({ src }: AvatarProps) => {
  return (
    <div
      className={css({
        display: "flex",
        cursor: "pointer",
      })}
    >
      <Image
        src={src as string}
        alt={`${src}`}
        width={20}
        height={20}
        className={css({
          borderRadius: "8px",
          width: "32px",
          height: "32px",
        })}
      />
    </div>
  );
};

export default Avatar;
