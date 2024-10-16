import React from 'react';

export const MenuBar = ({ ...res }) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 11.5C14 10.9477 14.4477 10.5 15 10.5H23C23.5523 10.5 24 10.9477 24 11.5C24 12.0523 23.5523 12.5 23 12.5H15C14.4477 12.5 14 12.0523 14 11.5ZM8 16.5C8 15.9477 8.44772 15.5 9 15.5H23C23.5523 15.5 24 15.9477 24 16.5C24 17.0523 23.5523 17.5 23 17.5H9C8.44772 17.5 8 17.0523 8 16.5ZM8 21.5C8 20.9477 8.44772 20.5 9 20.5H17C17.5523 20.5 18 20.9477 18 21.5C18 22.0523 17.5523 22.5 17 22.5H9C8.44772 22.5 8 22.0523 8 21.5Z"
          fill="#010114"
        />
      </svg>
    </>
  );
};