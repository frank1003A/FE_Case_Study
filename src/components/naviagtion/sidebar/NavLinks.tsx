"use client";
import React from "react";

interface NavLinksProps extends React.ComponentPropsWithoutRef<"ul"> {}

const NavLinks = ({ children, ...rest }: NavLinksProps) => {
  return <ul {...rest}>{children}</ul>;
};

export default NavLinks;
