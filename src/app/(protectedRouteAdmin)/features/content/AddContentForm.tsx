"use client";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { contentSchema, ContentSchemaType } from "@/lib/Schema/contentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { AddForm } from "./AddForm";

export const AddContentForm = () => {
  const { control, handleSubmit, reset } = useForm<ContentSchemaType>({
    defaultValues: {
      title: "",
    },
    resolver: zodResolver(contentSchema),
  });
  return (
    <section className=" rounded-lg bg-off-white-300 md:block hidden">
      <div className="border-b border-[#EFF2F7] p-6">
        <h4 className="font-normal text-xl text-dark">Add New Video</h4>
      </div>
      <AddForm />
    </section>
  );
};
