export const FacebookIcon = ({
  color = '#FCFDFE',
  width = '24',
  height = '25',
  ...props
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M22 12.9209C22 7.4009 17.52 2.9209 12 2.9209C6.48 2.9209 2 7.4009 2 12.9209C2 17.7609 5.44 21.7909 10 22.7209V15.9209H8V12.9209H10V10.4209C10 8.4909 11.57 6.9209 13.5 6.9209H16V9.9209H14C13.45 9.9209 13 10.3709 13 10.9209V12.9209H16V15.9209H13V22.8709C18.05 22.3709 22 18.1109 22 12.9209Z"
          fill={color}
        />
      </svg>
    </>
  );
};
