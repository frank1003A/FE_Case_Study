"use client";
import AbsoluteCenter from "@/components/AbsoluteCenter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { css } from "../../styled-system/css";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <AbsoluteCenter>
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
        <BarLoader color="#5570F1" loading={isLoading} />;
      </div>
    </AbsoluteCenter>
  );
}
