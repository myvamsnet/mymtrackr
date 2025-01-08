"use client";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import React from "react";
import useAddContent from "./hooks/useAddContent";

export const AddForm = () => {
  const { control, handleSubmit, onSubmit, isPending } = useAddContent();
  return (
    <form className="space-y-5 p-6" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        name={"title"}
        type={"text"}
        label={"Title"}
        control={control}
        placeholder={"Enter Title"}
      />
      <CustomInput
        name={"link"}
        type={"text"}
        label={"Link"}
        control={control}
        placeholder={"Enter Link"}
      />
      <Button type="submit" className="w-full h-[52px]" disabled={isPending}>
        {isPending ? "Loading..." : " Add Video"}
      </Button>
    </form>
  );
};
