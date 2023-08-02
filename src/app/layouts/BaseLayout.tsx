"use client";

import BreadCrumb from "@/components/BreadCrumb";
import Header from "@/components/naviagtion/Header";
import Sidebar from "@/components/naviagtion/Sidebar";
import { useMediaQuery } from "@/hook/useMediaQuery";
import { useEffect, useState } from "react";
import { css } from "../../../styled-system/css";

interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  const media = useMediaQuery("lg");
  // Mobile States
  const [toggleSb, setToggleSb] = useState(false);

  // Desktop States
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => setCollapse(!collapse);

  const handleSbToggle = () => {
    if (media) {
      setToggleSb(!toggleSb);
    } else {
      return;
    }
  };

  useEffect(() => {
    /** reverse collapse on media */
    setCollapse(false);
  }, [media]);

  return (
    <div
      className={css({
        display: "flex",
        width: "100%",
      })}
    >
      <Sidebar
        toggle={toggleSb}
        toggleSb={() => handleSbToggle()}
        collapse={collapse}
      />
      <div
        className={css({
          display: "flex",
          flexFlow: "column",
          flex: "1",
        })}
      >
        <Header
          toggle={toggleSb}
          toggleSb={() => handleSbToggle()}
          collapse={collapse}
          handleCollapse={handleCollapse}
        />
        <BreadCrumb />
        <main
          className={css({
            bgColor: "mainbg",
            h: "100%",
          })}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default BaseLayout;
