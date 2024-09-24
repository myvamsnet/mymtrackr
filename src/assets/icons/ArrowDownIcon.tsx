export const ArrowDownIcon = ({
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
        <rect
          width="18"
          height="18"
          transform="matrix(1 0 0 -1 0 18.5)"
          fill={fill}
        />
        <path
          d="M9 4.25V14.75M9 14.75L3.75 9.5M9 14.75L14.25 9.5"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
