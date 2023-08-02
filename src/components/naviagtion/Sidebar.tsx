"use client";
import { primaryLink } from "@/utils/core/brand/links";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { css } from "../../../styled-system/css";
import NavLink from "./sidebar/NavLink";
import NavLinks from "./sidebar/NavLinks";
import sidebarData from "./sidebar/data/sbData.json";

interface SidebarProps {
  // mobile responsive state
  toggle?: boolean;
  toggleSb: () => void;
  collapse: boolean;
}
const Sidebar = ({ toggle, toggleSb, collapse }: SidebarProps) => {
  const hideOnCollapse = (el: React.JSX.Element | string) => {
    if (collapse) {
      return "";
    } else {
      return el;
    }
  };

  const badgeUpdate = (currentIndex: number, index: number, value: number) => {
    if (currentIndex === index) {
      return value;
    } else {
      return;
    }
  };

  const updateMultipleBadge = (
    values: Array<{ c: number; i: number; v: number }>
  ) => {
    let value = 0;
    values.forEach((v) => {
      if (v.c === v.i) {
        value = v.v;
      }
    });

    return value;
  };

  return (
    <>
      {/** overlay component - mobile only */}
      <div
        className={css({
          position: "fixed",
          left: "0",
          right: "0",
          top: "0",
          bottom: "0",
          zIndex: "20",
          bgColor: "#0000003b",
          display: toggle ? "block" : "none",
          hideFrom: "lg",
          transition: "ease-in-out",
        })}
        onClick={toggleSb}
      ></div>
      <article
        role="navigation"
        className={css({
          maxW: "280px",
          w: {
            lgTo2xl: collapse ? "80px" : "280px",
            mdDown: "280px",
          },
          h: "100vh",
          height: "100vh",
          overflow: "auto",
          padding: "20px 16px",
          borderRight: "1px solid",
          borderRightColor: "stroke",
          display: "flex",
          flexDirection: "column",
          gap: {
            lgTo2xl: "3rem",
            mdDown: "2rem",
          },
          position: {
            lgTo2xl: "sticky",
            mdDown: "fixed",
          },
          left: "0px",
          top: "0px",
          bottom: "0px",
          transition: "ease-in-out 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)",
          transitionDuration: "250ms",
          transform: {
            lgOnly: "none",
            /**
             * mobile responsive property
             */
            mdDown: toggle ? "translateX(0%)" : "translateX(-100%)",
          },
          bgColor: "white",
          zIndex: "999",
        })}
      >
        {/** Collapse and Toggle Button */}
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            hideFrom: "md",
          })}
        >
          {/** Mobile Responsive Component */}
          <div
            onClick={toggleSb}
            className={css({
              display: "flex",
              alignSelf: "flex-end",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid",
              borderColor: "stroke",
              borderRadius: "8px",
              padding: "0px",
              height: "35px",
              width: "35px",
              color: "#555",
              transition: "all .3s ease-in-out",
              cursor: "pointer",
            })}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>

        {/** Metriks Logo */}
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
              <Image
                src={"/assets/brand/metrics-logo.svg"}
                alt="metrics-logo"
                width={50}
                height={50}
              />
              {hideOnCollapse(<span>Metrix</span>)}
            </div>
          </Link>
        </div>

        <section>
          <NavLinks>
            {sidebarData.map((link, idx) => {
              return (
                <NavLink
                  link={link}
                  key={link.title}
                  collapse={collapse}
                  badgeValue={updateMultipleBadge([
                    { c: idx, i: 1, v: 3 },
                    { c: idx, i: 4, v: 16 },
                  ])}
                />
              );
            })}
          </NavLinks>
        </section>

        <section
          className={css({
            display: "flex",
            flexDir: "column",
            gap: "20px",
          })}
        >
          <Link href="/support">
            <div
              className={css({
                display: "flex",
                padding: "11px 16px",
                gap: "10px",
                borderRadius: "16px",
                bgColor: "rgba(94, 99, 102, 0.10)",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
                alignItems: "center",
              })}
            >
              <Image
                src={"/assets/sidebar/headphones.svg"}
                alt="headphone-icon"
                width={20}
                height={20}
              />
              {hideOnCollapse(<span>Contact Support</span>)}
            </div>
          </Link>
          {collapse ? (
            <Link href="/upgrade">
              <div
                className={css({
                  display: "flex",
                  padding: "11px 16px",
                  gap: "10px",
                  borderRadius: "16px",
                  bgColor: "rgba(255, 204, 145, 0.20)",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  alignItems: "center",
                })}
              >
                <Image
                  src={"/assets/sidebar/gift.svg"}
                  alt="gift-icon"
                  width={20}
                  height={20}
                />
              </div>
            </Link>
          ) : (
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                padding: "11px 33px 13px 20px",
                borderRadius: "16px",
                bgColor: "rgba(255, 204, 145, 0.20)",
                rowGap: "10px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                <Image
                  src={"/assets/sidebar/gift.svg"}
                  alt="gift-icon"
                  width={20}
                  height={20}
                />
                <span>Free Gift Awaits You!</span>
              </div>
              <Link
                href="/upgrade"
                className={css({
                  display: "flex",
                  color: "#6E7079",
                  fontSize: "12px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  alignItems: "center",
                })}
              >
                <span>upgrade your account</span>
                <Image
                  src={"/assets/sidebar/chevdown.svg"}
                  alt="headphone-icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          )}
          <Link href={"/logout"}>
            <div
              className={css({
                display: "flex",
                padding: "11px 16px",
                gap: "10px",
                borderRadius: "16px",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
                alignItems: "center",
                _hover: {
                  bgColor: "rgba(94, 99, 102, 0.10)",
                },
              })}
            >
              <Image
                src={"/assets/sidebar/logout.svg"}
                alt="logout-icon"
                width={30}
                height={30}
              />
              {hideOnCollapse(<span>Logout</span>)}
            </div>
          </Link>
        </section>
      </article>
    </>
  );
};

export default Sidebar;

/** <div
            className={css({
              display: "flex",
              flexDirection: "column",
              padding: "11px 33px 13px 20px",
              borderRadius: "16px",
              bgColor: "rgba(255, 204, 145, 0.20)",
              rowGap: "10px",
            })}
          >
            <div
              className={css({
                display: "flex",
                gap: "10px",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <Image
                src={"/assets/sidebar/gift.svg"}
                alt="gift-icon"
                width={20}
                height={20}
              />
              <span>Free Gift Awaits You!</span>
            </div>
            <Link
              href="/upgrade"
              className={css({
                display: "flex",
                color: "#6E7079",
                fontSize: "12px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
                alignItems: "center",
              })}
            >
              <span>upgrade your account</span>
              <Image
                src={"/assets/sidebar/chevdown.svg"}
                alt="headphone-icon"
                width={20}
                height={20}
              />
            </Link>
          </div> */
