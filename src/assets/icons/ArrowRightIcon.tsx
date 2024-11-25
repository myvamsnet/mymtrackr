export const ArrowRightIcon = ({
  color = "#3E3E4C",
  width = "14",
  height = "14",
  ...props
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M0.75 6.5H11.25M11.25 6.5L6 1.25M11.25 6.5L6 11.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
