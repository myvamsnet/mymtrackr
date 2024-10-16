import React from 'react';

export const ReferralIcon = ({ color = '#246BFD', ...res }) => {
  return (
    <>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...res}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 3.375L8.10835 2.26043C7.72383 1.77979 7.14169 1.5 6.52617 1.5H6.375C5.33947 1.5 4.5 2.33947 4.5 3.375C4.5 3.50342 4.51291 3.62883 4.53751 3.75H3.75C2.50736 3.75 1.5 4.75736 1.5 6V6.75C1.5 7.41637 1.78969 8.01509 2.25 8.42708V14.25C2.25 15.4926 3.25736 16.5 4.5 16.5H13.5C14.7426 16.5 15.75 15.4926 15.75 14.25V8.42708C16.2103 8.01509 16.5 7.41637 16.5 6.75V6C16.5 4.75736 15.4926 3.75 14.25 3.75H13.4625C13.4871 3.62883 13.5 3.50342 13.5 3.375C13.5 2.33947 12.6605 1.5 11.625 1.5H11.4738C10.8583 1.5 10.2762 1.77979 9.89165 2.26043L9 3.375ZM10.6209 3.75H11.625C11.8321 3.75 12 3.58211 12 3.375C12 3.16789 11.8321 3 11.625 3H11.4738C11.314 3 11.1628 3.07266 11.063 3.19747L10.6209 3.75ZM3.75 5.25C3.33579 5.25 3 5.58579 3 6V6.75C3 7.16421 3.33579 7.5 3.75 7.5H8.25V5.25H3.75ZM9.75 5.25V7.5H14.25C14.6642 7.5 15 7.16421 15 6.75V6C15 5.58579 14.6642 5.25 14.25 5.25H9.75ZM6 3.375C6 3.58211 6.16789 3.75 6.375 3.75H7.37906L6.93704 3.19747C6.83719 3.07266 6.68601 3 6.52617 3H6.375C6.16789 3 6 3.16789 6 3.375ZM3.75 9L3.75 14.25C3.75 14.6642 4.08579 15 4.5 15H8.25V9H3.75ZM9.75 15V9H14.25V14.25C14.25 14.6642 13.9142 15 13.5 15H9.75Z"
          fill={color}
        />
      </svg>
    </>
  );
};