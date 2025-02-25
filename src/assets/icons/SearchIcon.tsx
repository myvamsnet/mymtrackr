const SearchIcon = ({ color = "#3E3E4C", ...props }) => {
  return (
    <>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6667 8C12.6667 10.5773 10.5773 12.6667 8 12.6667C5.42267 12.6667 3.33333 10.5773 3.33333 8C3.33333 5.42267 5.42267 3.33333 8 3.33333C10.5773 3.33333 12.6667 5.42267 12.6667 8ZM12.6879 11.7451C13.509 10.7187 14 9.41668 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C9.41668 14 10.7187 13.509 11.7451 12.6879L13.5286 14.4714C13.7889 14.7318 14.2111 14.7318 14.4714 14.4714C14.7318 14.2111 14.7318 13.7889 14.4714 13.5286L12.6879 11.7451Z"
          fill={color}
        />
      </svg>
    </>
  );
};

export default SearchIcon;
