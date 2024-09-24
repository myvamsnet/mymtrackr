"use client";

import { createRecordAction } from "@/app/actions/createRecordAction";
import { cloudinary_preset, cloudinary_url } from "@/constant/path";
import { useRedirect } from "@/hooks/useRedirect";
import { useUploadImage } from "@/hooks/useUploadImage";
import {
  addRecordsSchema,
  AddRecordsSchemaType,
} from "@/lib/Schema/incomeSchema";
import { uploadImageToCloudinary } from "@/lib/uploadImageToCloudinary";
import { Type } from "@/types/records";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useCreateRecord = () => {
  const { type } = useParams();
  const queryClient = useQueryClient();
  const [uploading, setUploading] = useState(false);
  const redirect = useRedirect();
  const { image, handleFileChange, errorMessage, previewUrl } =
    useUploadImage();

  const { control, handleSubmit, reset } = useForm<AddRecordsSchemaType>({
    defaultValues: {
      amount: "",
      name: "",
      note: "",
    },
    resolver: zodResolver(addRecordsSchema),
  });

  const prepareFormData = async (data: AddRecordsSchemaType) => {
    const formData = new FormData();
    formData.append("amount", data.amount);
    formData.append("name", data.name);
    formData.append("type", type as Type);
    if (data.note) formData.append("note", data.note);

    if (image) {
      const imageUrl = await uploadImageToCloudinary(image);
      if (!imageUrl) throw new Error("Image upload failed");
      formData.append("image", imageUrl);
    }

    return formData;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: AddRecordsSchemaType) => {
      const formData = await prepareFormData(data);
      return await createRecordAction(formData);
    },
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.error ?? "Error adding record");
        return;
      }
      toast.success("Record Added Successfully");
      reset();
      redirect();
    },
    onError: (error: AxiosError<{ error: string }>) => {
      const errorMsg = error?.response?.data?.error || "An error occurred";
      console.log(errorMsg);
      toast.error(errorMsg);
    },
  });

  return {
    control,
    handleSubmit,
    handleFileChange,
    errorMessage,
    previewUrl,
    uploading,
    setUploading,
    redirect,
    image,
    mutate,
    isPending,
  };
};
