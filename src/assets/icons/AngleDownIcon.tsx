export const AngleDownIcon = ({
  color = "#7A7A84",
  width = "10",
  height = "6",
  ...props
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M1 1L5 5L9 1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
