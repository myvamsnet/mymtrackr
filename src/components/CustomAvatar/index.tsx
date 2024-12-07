import { getRandomColor } from "@/lib/helper/getRandomColor";
import React, { useMemo } from "react";

interface AvatarProps {
  fullName: string;
  // lastName: string;
  size?: number;
}

export const CustomAvatar: React.FC<AvatarProps> = ({
  fullName,

  size = 40,
}) => {
  const initials = useMemo(() => {
    const firstInitial = fullName.charAt(0).toUpperCase();
    // const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial}`;
  }, [fullName]);

  const backgroundColor = useMemo(() => getRandomColor(), []);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: `${size / 2}px`,
        fontWeight: "bold",
      }}
    >
      {initials}
    </div>
  );
};
