import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getRandomColor } from "@/lib/helper/getRandomColor";
import clsx from "clsx";
import { useMemo } from "react";

export default function CustomAvatar({
  name,
  imgUrl,
  className = "h-[120px] w-full text-4xl text-white font-bold uppercase",
  size = 40,
}: {
  name: string;
  imgUrl?: string;
  className?: string;
  size?: number;
}) {
  const initials = useMemo(() => {
    if (!name) return ""; // Handle cases where name is null or undefined
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0]?.charAt(0)?.toUpperCase() ?? "";
    const lastInitial = nameParts[1]?.charAt(0)?.toUpperCase() ?? ""; // Handle cases where there's no second word
    return `${firstInitial}${lastInitial}`;
  }, [name]);

  const backgroundColor = useMemo(() => getRandomColor(name || ""), [name]);

  if (imgUrl) {
    return (
      <Avatar
        className={clsx(
          "h-[120px] w-full flex justify-center items-center font-bold text-white rounded-full ",
          className
        )}
      >
        <AvatarImage
          src={imgUrl}
          alt={name || "Mtracker"}
          crossOrigin="anonymous"
        />
      </Avatar>
    );
  }

  return (
    <div
      className={`flex justify-center items-center font-bold text-white rounded-full`}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        fontSize: `${size / 2}px`,
        backgroundColor,
      }}
    >
      {initials}
    </div>
  );
}
