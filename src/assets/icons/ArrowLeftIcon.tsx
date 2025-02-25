export const ArrowLeftIcon = ({
  color = "#9B8306",
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
          d="M11.25 6.5H0.75M0.75 6.5L6 1.25M0.75 6.5L6 11.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
