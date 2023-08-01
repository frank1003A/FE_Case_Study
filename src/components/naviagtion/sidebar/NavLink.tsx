"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "../../../../styled-system/css";
import { NavLinks } from "./types";

interface NavLinksProps {
  link: NavLinks;
  collapse?: boolean;
}
const NavLink = ({ link, collapse }: NavLinksProps) => {
  const pathname = usePathname();
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
    <li>
      <Link href={link.path}>
        <div
          className={css({
            display: "flex",
            padding: collapse ? "14px" : "16px 20px",
            alignItems: collapse ? "center" : "flex-start",
            gap: "10px",
            borderRadius: "12px",
            bgColor: link.path === pathname ? "primary" : "inherit",
            color: link.path === pathname ? "white" : "pfont",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)",
            fontSize: "14px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "normal",
            _hover: {
              bgColor: "rgba(94, 99, 102, 0.10)",
            },
          })}
        >
          <Image
            src={link.icon as string}
            alt={link.path + "icon"}
            width={20}
            height={20}
            className={css({
              filter: link.path === pathname ? whiteFilter : greyFilter,
              _groupHover: {
                filter: whiteFilter,
              },
            })}
          />
          {hideOnCollapse(<span>{link.title}</span>)}
        </div>
      </Link>
    </li>
  );
};

export default NavLink;
