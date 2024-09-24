export const ArrowUpIcon = ({
  fill = "#F1F5FD",
  stroke = "#3E3E4C",
  width = "18",
  height = "19",
  ...props
}) => {
  return (
    <>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect width="18" height="18" transform="translate(0 0.5)" fill={fill} />
        <path
          d="M9 14.75V4.25M9 4.25L3.75 9.5M9 4.25L14.25 9.5"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
