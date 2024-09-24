export const ArrowRightIcon = ({
  fill = "#F1F5FD",
  stroke = "#3E3E4C",
  width = "18",
  height = "19",
  ...props
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect width="18" height="18" transform="translate(0 0.5)" fill={fill} />
        <path
          d="M3.75 9.5H14.25M14.25 9.5L9 4.25M14.25 9.5L9 14.75"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
