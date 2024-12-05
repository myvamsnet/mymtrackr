import { CustomSVGProps } from "@/types/icon";
import React from "react";

export const NairaIcon = ({ color = "#010114", ...props }: CustomSVGProps) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M4.66659 12V4.70133C4.66654 4.54622 4.71802 4.39548 4.81293 4.27279C4.90785 4.1501 5.04083 4.06242 5.19098 4.0235C5.34114 3.98459 5.49997 3.99666 5.64253 4.0578C5.78508 4.11895 5.90329 4.22572 5.97859 4.36133L10.0213 11.6387C10.0965 11.7743 10.2148 11.881 10.3573 11.9422C10.4999 12.0033 10.6587 12.0154 10.8089 11.9765C10.959 11.9376 11.092 11.8499 11.1869 11.7272C11.2818 11.6045 11.3333 11.4538 11.3333 11.2987V4M3.33325 6.66667H12.6666M3.33325 9.33333H12.6666"
          stroke="#010114"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
