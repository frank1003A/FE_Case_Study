"use client";
import { primaryLink } from "@/utils/core/brand/links";
import {
  faBars,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "../../../styled-system/css";
import Avatar from "../avatar/Avatar";
import IconButton from "../buttons/IconButton";
import Menu from "../dropdown/Menu";
import links from "./sidebar/data/sbData.json";

interface HeaderProps {
  toggle?: boolean;
  toggleSb?: () => void;
  collapse?: boolean;
  handleCollapse?: () => void;
}

const Header = ({
  toggle,
  toggleSb,
  collapse,
  handleCollapse,
}: HeaderProps) => {
  const pathname = usePathname();

  const getCurrentPathname = () => {
    const navlinks = [...links];

    return navlinks.filter((l) => l.path === pathname).at(0)?.title;
  };

  const options = [{ title: "Nany's Shop", value: "nanyshop" }];

  return (
    <div
      className={css({
        h: "60px",
        position: "sticky",
        top: "0px",
        bgColor: "white",
        padding: {
          lgTo2xl: "14px 21px",
          mdDown: "14px 20px",
        },
        display: "flex",
        alignItems: "center",
        zIndex: "10",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            hideBelow: "md",
          })}
        >
          <div
            onClick={handleCollapse}
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid transparent",
              borderRadius: "8px",
              padding: "0px",
              height: "35px",
              width: "35px",
              color: "#555",
              transition: "all .3s ease-in-out",
              cursor: "pointer",
              _hover: {
                border: "1px solid #F1F3F9",
              },
            })}
          >
            <FontAwesomeIcon icon={collapse ? faChevronRight : faChevronLeft} />
          </div>

          <h2
            className={css({
              hideBelow: "md",
              ml: "10px",
            })}
          >
            {getCurrentPathname()}
          </h2>
        </div>

        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "20px",
            hideBelow: "md",
          })}
        >
          <Menu options={options} />

          <IconButton src="/assets/bell.svg" />

          <Avatar src="/assets/users/user_1.svg"></Avatar>
        </div>

        {/** Mobile Component */}
        <div
          className={css({
            hideFrom: "lg",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          })}
        >
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #F1F3F9",
              borderRadius: "8px",
              padding: "0px",
              height: "35px",
              width: "35px",
              color: "#555",
              transition: "all .3s ease-in-out",
              cursor: "pointer",
            })}
            onClick={toggleSb}
          >
            <FontAwesomeIcon icon={faBars} height={30} width={30} />
          </div>

          <div
            className={css({
              fontSize: "20px",
              fontWeight: "700",
              fontStyle: "normal",
              lineHeight: "normal",
            })}
          >
            <Link href={primaryLink}>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: ".5rem",
                })}
              >
                <span>Metrix</span>
              </div>
            </Link>
          </div>
        </div>

        {/** Mobile Component */}
        <div
          className={css({
            hideFrom: "lg",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          })}
        >
          <IconButton src="/assets/bell.svg" />
          <Avatar src="/assets/users/user_1.svg"></Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
