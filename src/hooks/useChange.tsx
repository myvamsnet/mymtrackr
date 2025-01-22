import { useState } from "react";

export const useChange = <T,>(
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>, (newValue: T) => void] => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue: T) => {
    setValue(newValue);
  };

  return [value, setValue, handleChange];
};
