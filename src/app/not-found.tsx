import AbsoluteCenter from "@/components/AbsoluteCenter";
import Button from "@/components/buttons/Button";
import { primaryLink } from "@/utils/core/brand/links";
import Image from "next/image";
import Link from "next/link";
import { css } from "../../styled-system/css";

export default function NotFound() {
  return (
    <AbsoluteCenter>
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          color: "pfont",
        })}
      >
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
              <span>Metrix</span>
            </div>
          </Link>
        </div>
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </AbsoluteCenter>
  );
}
