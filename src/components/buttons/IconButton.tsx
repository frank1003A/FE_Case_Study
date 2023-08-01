"use client";
import Image from "next/image";
import React from "react";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  src: string;
}

const IconButton = ({ src, ...rest }: IconButtonProps) => {
  return (
    <button {...rest}>
      <Image src={src as string} alt={`${src}`} width={20} height={20} />
    </button>
  );
};

export default IconButton;
