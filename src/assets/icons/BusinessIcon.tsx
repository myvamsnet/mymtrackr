import { CustomSVGProps } from "@/types/icon";

export const BusinessIcon = ({ ...props }: CustomSVGProps) => {
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
          d="M5.33337 14V4.66667C5.33337 4.04669 5.33337 3.7367 5.40152 3.48236C5.58646 2.79218 6.12555 2.25308 6.81574 2.06815C7.07007 2 7.38006 2 8.00004 2C8.62002 2 8.93001 2 9.18434 2.06815C9.87453 2.25308 10.4136 2.79218 10.5986 3.48236C10.6667 3.7367 10.6667 4.04669 10.6667 4.66667V14M3.46671 14H12.5334C13.2801 14 13.6535 14 13.9387 13.8547C14.1896 13.7268 14.3936 13.5229 14.5214 13.272C14.6667 12.9868 14.6667 12.6134 14.6667 11.8667V6.8C14.6667 6.05326 14.6667 5.6799 14.5214 5.39468C14.3936 5.1438 14.1896 4.93982 13.9387 4.81199C13.6535 4.66667 13.2801 4.66667 12.5334 4.66667H3.46671C2.71997 4.66667 2.3466 4.66667 2.06139 4.81199C1.8105 4.93982 1.60653 5.1438 1.4787 5.39468C1.33337 5.6799 1.33337 6.05326 1.33337 6.8V11.8667C1.33337 12.6134 1.33337 12.9868 1.4787 13.272C1.60653 13.5229 1.8105 13.7268 2.06139 13.8547C2.3466 14 2.71997 14 3.46671 14Z"
          stroke="#010114"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};