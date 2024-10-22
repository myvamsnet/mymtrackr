import React from 'react';

export const DiamondIcon = ({
  color = '#010114',
  width = '16',
  height = '16',
  ...props
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M1.66636 5H14.333M6.66636 1L5.33302 5L7.99969 12.6667L10.6664 5L9.33302 1M8.40941 12.5083L14.3818 5.34143C14.483 5.21997 14.5337 5.15924 14.553 5.09144C14.5701 5.03167 14.5701 4.96833 14.553 4.90856C14.5337 4.84076 14.483 4.78003 14.3818 4.65857L11.4929 1.1919C11.4342 1.12136 11.4048 1.08609 11.3687 1.06074C11.3368 1.03827 11.3012 1.02159 11.2635 1.01145C11.221 1 11.175 1 11.0832 1H4.91616C4.82434 1 4.77843 1 4.73588 1.01145C4.69819 1.02159 4.66257 1.03827 4.63064 1.06074C4.59461 1.08609 4.56522 1.12136 4.50644 1.1919L1.61755 4.65857C1.51633 4.78003 1.46572 4.84076 1.44638 4.90855C1.42933 4.96832 1.42933 5.03167 1.44638 5.09144C1.46572 5.15924 1.51633 5.21997 1.61755 5.34143L7.58997 12.5083C7.73068 12.6772 7.80103 12.7616 7.88526 12.7924C7.95916 12.8194 8.04023 12.8194 8.11412 12.7924C8.19835 12.7616 8.2687 12.6772 8.40941 12.5083Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
