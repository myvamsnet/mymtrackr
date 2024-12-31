"use client";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { contentSchema, ContentSchemaType } from "@/lib/Schema/contentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export const AddForm = () => {
  const { control, handleSubmit, reset } = useForm<ContentSchemaType>({
    defaultValues: {
      title: "",
    },
    resolver: zodResolver(contentSchema),
  });
  return (
    <form className="space-y-5 p-6">
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

      <Button className="w-full h-[52px]">Add Video</Button>
    </form>
  );
};
