export const PlusIcon = ({ color = '#FCFDFE', ...props }) => {
  return (
    <>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect
          x="4.44446"
          width="1.11111"
          height="10"
          rx="0.555556"
          fill={color}
        />
        <rect
          y="4.44446"
          width="10"
          height="1.11111"
          rx="0.555556"
          fill={color}
        />
      </svg>
    </>
  );
};
