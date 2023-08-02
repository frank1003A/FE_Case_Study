import Image from "next/image";
import { BarLoader } from "react-spinners";
import { css } from "../../styled-system/css";

export default function Loading() {
  return (
    <div
      className={css({
        w: "100%",
        h: "100%",
        pos: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div
        className={css({
          pos: "absolute",
          display: "flex",
          flexDir: "column",
          gap: "15px",
        })}
      >
        {/** Metriks Logo */}
        <div
          className={css({
            fontSize: "20px",
            fontWeight: "700",
            fontStyle: "normal",
            lineHeight: "normal",
          })}
        >
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
        </div>
        <BarLoader loading={true} color="#5570F1" />;
      </div>
    </div>
  );
}
