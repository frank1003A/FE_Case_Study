import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        padding: "5px",
        gap: "7px",
        borderRadius: "8px",
        cursor: "pointer",
        color: "pfont",
        _hover: {
          bgColor: "#eee",
        },
        fontWeight: "400",
      })}
    >
      <span role="menuitem">{options[0].title}</span>
      <span>
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </div>
  );
};

export default CardMenu;
