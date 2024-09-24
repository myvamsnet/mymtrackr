import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function CustomAvatar({
  name,
  imgUrl,
  className = "h-[120px] w-full text-4xl text-white font-bold uppercase",
}: {
  name: string;
  imgUrl?: string;
  className?: string;
}) {
  return (
    <div className=" uppercase">
      <Avatar className={className}>
        <AvatarImage
          src={imgUrl || "/images/profile.jpg"}
          alt={name || "Avater"}
        />
      </Avatar>
    </div>
  );
}
