import { CustomSVGProps } from "@/types/icon";

export const Capital = ({ color = "#85008F", ...props }: CustomSVGProps) => {
  return (
    <>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clip-path="url(#clip0_2834_16822)">
          <path
            d="M14.625 3.9375H3.375C2.75368 3.9375 2.25 4.44118 2.25 5.0625V12.9375C2.25 13.5588 2.75368 14.0625 3.375 14.0625H14.625C15.2463 14.0625 15.75 13.5588 15.75 12.9375V5.0625C15.75 4.44118 15.2463 3.9375 14.625 3.9375Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.25 8.4375H6.75C6.75 9.03424 6.98705 9.60653 7.40901 10.0285C7.83097 10.4504 8.40326 10.6875 9 10.6875C9.59674 10.6875 10.169 10.4504 10.591 10.0285C11.0129 9.60653 11.25 9.03424 11.25 8.4375H15.75"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.25 6.1875H15.75"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2834_16822">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
