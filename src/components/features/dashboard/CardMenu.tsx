import Image from "next/image";
import React from "react";
import { css } from "../../../../styled-system/css";

interface cardMenuProps extends React.ComponentPropsWithoutRef<"div"> {
  options: { title: string; value: string | number }[];
}

const CardMenu = ({ options }: cardMenuProps) => {
  return (
    <div
      role="menu"
      className={css({
        display: "flex",
        alignItems: "center",
        padding: "5px 0px",
        gap: "7px",
        borderRadius: "8px",
        cursor: "pointer",
        color: "#BEC0CA",
      })}
    >
      <span role="menuitem">{options[0].title}</span>
      <span>
        <Image
          src={"/assets/chevdown.svg"}
          alt="dropdown-arrow"
          width={20}
          height={20}
        />
      </span>
    </div>
  );
};

export default CardMenu;
