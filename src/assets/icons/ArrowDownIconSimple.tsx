import { CustomSVGProps } from "@/types/icon";
import React from "react";

export const ArrowDownIconSimple = ({
  color = "#3E3E4C",
  ...props
}: CustomSVGProps) => {
  return (
    <>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M4 6.5L8 10.5L12 6.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
