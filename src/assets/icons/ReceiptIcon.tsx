import { CustomSVGProps } from "@/types/icon";
import React from "react";

export const ReceiptIcon = ({
  color = "#010114",
  ...props
}: CustomSVGProps) => {
  return (
    <>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M14 4H11.8667C10.7466 4 10.1865 4 9.75869 4.21799C9.38236 4.40973 9.0764 4.7157 8.88465 5.09202C8.66667 5.51984 8.66667 6.0799 8.66667 7.2V8M14 4L12 2M14 4L12 6M6.66667 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.07989 14 5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V9.33333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};