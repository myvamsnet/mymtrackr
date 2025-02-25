import React from "react";

export const Close = ({ ...res }) => {
  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...res}
      >
        <rect
          width="32"
          height="32"
          rx="12"
          fill="#FCFDFE"
        />
        <path
          d="M21 11L11 21M11 11L21 21"
          stroke="#010114"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
