export const ClockRewindIcon = ({
  color = "#010114",
  width = "17",
  height = "16",
  ...props
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M16.025 9.125L14.5254 7.625L13.025 9.125M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C10.4764 1.25 12.6414 2.5836 13.8159 4.57182M8 4.25V8L10.25 9.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
