export const MoreIcon = ({ color = "#010114", ...props }) => {
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
          d="M2 8H14M2 4H14M2 12H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
