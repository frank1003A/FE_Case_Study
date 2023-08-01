import Image from "next/image";
import React from "react";
import { css } from "../../../styled-system/css";

interface MenuProps extends React.ComponentPropsWithoutRef<"div"> {
  options: { title: string; value: string | number }[];
}

const Menu = ({ options }: MenuProps) => {
  return (
    <div
      role="menu"
      className={css({
        display: "flex",
        alignItems: "center",
        padding: "5px 12px",
        gap: "10px",
        bgColor: "#FEF5EA",
        borderRadius: "8px",
        cursor: "pointer",
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

export default Menu;
