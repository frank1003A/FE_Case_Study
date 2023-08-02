"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "../../styled-system/css";

const BreadCrumb = () => {
  const pathname = usePathname();
  return (
    <div
      className={css({
        w: "100%",
        bgColor: "white",
        borderTop: "1px solid",
        borderColor: "stroke",
        padding: "4px 20px",
        color: "#8B8D97",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "12px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "normal",
        })}
      >
        <Link href={"/"}>
          <Image
            src={"/assets/home.svg"}
            alt="breadcrumb-home-icon"
            width={20}
            height={20}
          />
        </Link>
        <span>/</span>
        <span>
          {pathname === "/" ? "" : `${pathname.substring(1, pathname.length)}`}
        </span>
      </div>
    </div>
  );
};

export default BreadCrumb;
