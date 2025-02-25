export const MinusIcon = ({ color = '#FCFDFE', ...props }) => {
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
        <rect
          x="4.07129"
          y="4.8573"
          width="1.11111"
          height="10"
          rx="0.555556"
          transform="rotate(-45 4.07129 4.8573)"
          fill={color}
        />
        <rect
          x="4.07129"
          y="11.1427"
          width="10"
          height="1.11111"
          rx="0.555556"
          transform="rotate(-45 4.07129 11.1427)"
          fill={color}
        />
      </svg>
    </>
  );
};
