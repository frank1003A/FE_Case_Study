"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "../../../../styled-system/css";
import { NavLinks } from "./types";

interface NavLinksProps {
  link: NavLinks;
  collapse?: boolean;
  badgeValue?: number;
  onLinkClick?: () => void;
}
const NavLink = ({
  link,
  collapse,
  badgeValue,
  onLinkClick,
}: NavLinksProps) => {
  const pathname = usePathname();

  const activeLink = link.path === pathname;
  const hideOnCollapse = (el: React.JSX.Element | string) => {
    if (collapse) {
      return "";
    } else {
      return el;
    }
  };

  const greyFilter =
    "invert(32%) sepia(3%) saturate(1361%) hue-rotate(196deg) brightness(89%) contrast(81%)";
  const whiteFilter = "brightness(0) invert(1);";
  return (
    <li onClick={onLinkClick}>
      <Link href={link.path}>
        <div
          className={css({
            display: "flex",
            padding: collapse ? "14px" : "16px 20px",
            alignItems: "center",
            justifyContent: "flex-start",
            textAlign: "center",
            gap: "10px",
            borderRadius: "12px",
            bgColor: activeLink ? "primary" : "inherit",
            color: activeLink ? "white" : "pfont",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)",
            fontSize: "14px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "normal",
            _hover: {
              bgColor: activeLink ? "" : "rgba(94, 99, 102, 0.10)",
            },
            pos: "relative",
          })}
        >
          <Image
            src={link.icon as string}
            alt={link.path + "icon"}
            width={20}
            height={20}
            className={css({
              filter: activeLink ? whiteFilter : greyFilter,
              _groupHover: {
                filter: whiteFilter,
              },
            })}
          />
          {hideOnCollapse(<span>{link.title}</span>)}
          {badgeValue ? (
            <span
              className={css({
                display: "flex",
                w: "24px",
                h: "24px",
                p: "8px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "500px",
                bgColor: "#FFCC91",
                pos: collapse ? "absolute" : "relative",
                top: collapse ? "-4px" : "",
                right: collapse ? "-5px" : "",
                fontSize: "12px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
              })}
            >
              {badgeValue}
            </span>
          ) : (
            ""
          )}
        </div>
      </Link>
    </li>
  );
};

export default NavLink;
