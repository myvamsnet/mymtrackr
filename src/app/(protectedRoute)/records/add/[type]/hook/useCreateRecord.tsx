"use client";
import { createRecordAction } from "@/app/actions/createRecordAction";
import { useRedirect } from "@/hooks/useRedirect";
import { useUploadImage } from "@/hooks/useUploadImage";
import {
  addRecordsSchema,
  AddRecordsSchemaType,
} from "@/lib/Schema/incomeSchema";
import { Type } from "@/types/records";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useCreateRecord = () => {
  const [status, setStatus] = useState(false);
  const { type } = useParams() as { type: Type };
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

  const onSubmit = async (data: AddRecordsSchemaType) => {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("amount", data.amount);
    formData.append("name", data.name);

    if (data?.note) {
      formData.append("note", data.note);
    }
    if (image) {
      formData.append("file", image);
    }

    setStatus(true);
    try {
      const res = await createRecordAction(formData);
      if (!res?.success) {
        throw new Error(res?.message);
      }
      reset();
      toast.success(`Record created successfully`);
      redirect();
    } catch (error) {
      if (
        (error as any).message !== undefined &&
        (error as any).message !== null &&
        (error as any).message !== ""
      ) {
        toast.error((error as any).message);
      }
    } finally {
      setStatus(false);
    }
  };

  return {
    control,
    handleSubmit,
    handleFileChange,
    errorMessage,
    previewUrl,
    onSubmit,
    isPending: status,
  };
};
