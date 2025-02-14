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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { uploadImageToCloudinary } from "@/lib/uploadImageToCloudinary";
import { useEffect, useState } from "react";
import { handleError } from "@/lib/helper/handleError";
import { BusinessData, BusinessResponseData } from "@/types/business";
import { hexToIColor } from "@/lib/helper/hexToIColor";

export const useEditBusiness = (businessData: BusinessData) => {
  // Access the client
  const queryClient = useQueryClient();

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
  const { handleFileChange, image, previewUrl, setPreviewUrl } =
    useUploadImage();

  useEffect(() => {
    if (businessData) {
      const {
        businessName,
        businessEmail,
        phoneNumber1,
        phoneNumber2,
        bankName,
        accountName,
        accountNumber,
        termsOfService,
        brandColor,
        imageUrl,
      } = businessData;

      setValue("businessName", businessName);
      setValue("businessEmail", businessEmail);
      setValue("phoneNumber1", phoneNumber1);
      setValue("phoneNumber2", phoneNumber2);
      setValue("bankName", bankName);
      setValue("accountName", accountName);
      setValue("accountNumber", accountNumber);
      setValue("termsOfService", termsOfService);

      if (brandColor) {
        const colorObject = hexToIColor(brandColor); // Convert hex to IColor
        setColor(colorObject);
      }

      setPreviewUrl(imageUrl || "");
    }
  }, [businessData, setValue, setColor, setPreviewUrl]);

  // Mutation for create/update operations
  const { isPending, mutate } = useMutation({
    mutationFn: async (formData: BusinessSettingFormData) => {
      const response = await axiosInstance.put(
        `business/settings/${businessData.id}`,
        formData
      );
      return response.data;
    },
    onSuccess: (response: BusinessResponseData) => {
      if (response?.success) {
        toast.success("Business Account Updated");
        queryClient.invalidateQueries({
          queryKey: ["user"],
        });
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
