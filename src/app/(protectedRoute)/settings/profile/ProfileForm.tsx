"use client";

import { CameraIcon } from "@/assets/icons/CameraIcon";
import { CustomInput } from "@/components/CustomInput";
import CustomAvatar from "@/components/ui/Avatar/index";
import { profileInputlists } from "@/constant/profile";
import React, { useEffect } from "react";
import { useUpdateProfile } from "./hook/useUpdateProfile";
import { Button } from "@/components/ui/button";

export const ProfileForm = ({ data }: Props) => {
  const {
    control,
    previewUrl,
    handleFileChange,
    handleSubmit,
    isPending,
    onSubmit,
    setValue,
  } = useUpdateProfile();
  useEffect(() => {
    if (data) {
      setValue("fullName", data?.fullName);
      setValue("email", data?.email);
      setValue("phoneNumber", data?.phoneNumber);
    }
  }, [setValue, data]);

  return (
    <>
      <section className="py-4 flex justify-center items-center">
        <div className=" relative w-[120px]">
          <CustomAvatar
            name={data?.fullName || "m tracker"}
            imgUrl={previewUrl ? (previewUrl as string) : data?.imageUrl}
          />
          <label className=" absolute bottom-0 right-0">
            <CameraIcon />
            <input type="file" hidden onChange={handleFileChange} />
          </label>
        </div>
      </section>
      <form className="p-4 bg-off-white-300" onSubmit={handleSubmit(onSubmit)}>
        <section className=" grid gap-4">
          {profileInputlists.map((input, i) => (
            <CustomInput
              key={i}
              name={input.name}
              type={input.type}
              label={input.label}
              control={control}
              placeholder={input.placeholder}
              disabled={input.name === "email" ? true : false}
            />
          ))}
        </section>
        <div className="">
          <Button
            type="submit"
            className="my-5  w-full font-semibold text-base"
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </>
  );
};
interface Props {
  data: {
    fullName: string;
    imageUrl?: string;
    email: string;
    phoneNumber: string;
  };
}
