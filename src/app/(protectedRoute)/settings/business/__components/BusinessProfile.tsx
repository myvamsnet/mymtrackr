"use client";

import { CameraIcon } from "@/assets/icons/CameraIcon";
import CustomAvatar from "@/components/ui/Avatar/index";
import { useGetBusiness } from "@/hooks/businessSettings/useGetBusiness";
import { BusinessData } from "@/types/business";

export const BusinessProfile = ({ previewUrl, handleFileChange }: Props) => {
  const { data } = useGetBusiness();
  const businessData = data?.data as BusinessData;
  return (
    <section className="py-4 flex justify-center items-center bg-off-white-300">
      <div className=" relative w-[120px]">
        <CustomAvatar
          name={businessData?.businessName}
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
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  previewUrl: string;
}
