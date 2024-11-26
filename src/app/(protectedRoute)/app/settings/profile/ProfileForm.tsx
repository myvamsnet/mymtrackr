"use client";
import { CustomInput } from "@/components/CustomInput";
import { profileInputlists } from "@/constant/profile";
import React, { useEffect } from "react";
import { useUpdateProfile } from "./hook/useUpdateProfile";
import { Button } from "@/components/ui/button";
import { User } from "@/types/auth";
import { ProfileLayout } from "../__components/ProfileLayout";

export const ProfileForm = ({ user }: Props) => {
  const {
    control,
    previewUrl,
    handleFileChange,
    handleSubmit,
    isPending,
    onSubmit,
  } = useUpdateProfile(user);
  return (
    <>
      <ProfileLayout
        user={user}
        previewUrl={previewUrl as string}
        handleFileChange={handleFileChange}
      />
      <form
        className="p-4 bg-off-white-300"
        onSubmit={handleSubmit(onSubmit)}
      >
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
  user: User;
}
