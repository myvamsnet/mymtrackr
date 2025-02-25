export const ArrowUpIcon = ({
  color = "#880606",
  width = "14",
  height = "14",
  ...props
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M6.5 11.75V1.25M6.5 1.25L1.25 6.5M6.5 1.25L11.75 6.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
