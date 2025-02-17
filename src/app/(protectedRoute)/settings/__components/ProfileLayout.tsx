"use client";

import { CameraIcon } from "@/assets/icons/CameraIcon";
import CustomAvatar from "@/components/ui/Avatar/index";
import { User } from "@/types/auth";

export const ProfileLayout = ({
  user,
  previewUrl,
  handleFileChange,
}: Props) => {
  return (
    <section className="py-4 flex justify-center items-center bg-off-white-300">
      <div className=" relative w-[120px]">
        <CustomAvatar
          name={user?.fullName ?? "My MTracker"}
          size={120}
          imgUrl={previewUrl}
        />
        <label
          className=" absolute bottom-0 right-0 cursor-pointer"
          id="file"
          htmlFor="upload-profile"
        >
          <CameraIcon />
          <input
            type="file"
            hidden
            id="upload-profile"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </section>
  );
};
interface Props {
  user: User;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  previewUrl: string;
}
