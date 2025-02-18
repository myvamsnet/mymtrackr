"use client";

import { useUploadImage } from "@/hooks/useUploadImage";
import {
  businessSchema,
  BusinessSchemaType,
  BusinessSettingFormData,
} from "@/lib/Schema/businessSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useColor } from "react-color-palette";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { uploadImageToCloudinary } from "@/lib/uploadImageToCloudinary";
import { useState } from "react";
import { handleError } from "@/lib/helper/handleError";
import { BusinessData, BusinessResponseData } from "@/types/business";
import { useRedirect } from "@/hooks/useRedirect";
import userStore from "@/zustand/userStore";

export const useBusiness = () => {
  const redirectToPage = useRedirect();
  const { user } = userStore();
  const businessData = user?.businessProfile;

  // Initialize React Hook Form
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<BusinessSchemaType>({
    defaultValues: {
      businessName: "",
      businessEmail: "",
      phoneNumber1: "",
      phoneNumber2: "",
      bankName: "",
      accountName: "",
      accountNumber: "",
      termsOfService: "",
    },
    resolver: zodResolver(businessSchema),
  });

  const [color, setColor] = useColor(
    (businessData?.brandColor as string) ?? "#06870B"
  );
  const [imageLoader, setImageLoader] = useState(false);
  const { handleFileChange, image, previewUrl } = useUploadImage();

  // Mutation for create/update operations
  const { isPending, mutate } = useMutation({
    mutationFn: async (formData: BusinessSettingFormData) => {
      const response = await axiosInstance.post("business/settings", formData);
      return response.data;
    },
    onSuccess: (response: BusinessResponseData) => {
      if (response?.success) {
        toast.success("Business Account Created");
        return window.location.reload();
      }
    },
    onError: handleError,
  });

  // Form submission handler
  const onSubmit = async (formData: BusinessSchemaType) => {
    const payload: BusinessSettingFormData = {
      ...formData,
      brandColor: color.hex,
    };

    if (image) {
      setImageLoader(true);
      try {
        payload.imageUrl = (await uploadImageToCloudinary(image)) as string;
      } catch (error) {
        console.error("Image upload failed:", error);
        return; // Skip mutation if the image upload fails
      } finally {
        setImageLoader(false);
      }
    }

    mutate(payload);
  };

  return {
    control,
    handleSubmit,
    handleFileChange,
    image,
    previewUrl,
    onSubmit,
    setValue,
    isValid,
    color,
    setColor,
    isPending,
    imageLoader,
  };
};
interface Props {
  direction: "create" | "update";
  businessData?: BusinessData;
}
