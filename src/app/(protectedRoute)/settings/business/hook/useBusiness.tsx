"use client";
import { updateProfileAction } from "@/app/actions/updateUserProfileAction";
import { cloudinary_preset } from "@/constant/path";
import { useUploadImage } from "@/hooks/useUploadImage";
import {
  businessSchema,
  BusinessSchemaType,
} from "@/lib/Schema/businessSchema";
import { profileSchema, ProfileSchemaType } from "@/lib/Schema/profileSchema";
import { User } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ColorPicker, useColor } from "react-color-palette";

export const useBusiness = (user: User) => {
  const [color, setColor] = useColor("#06870B");
  const { handleFileChange, image, previewUrl, setImage } = useUploadImage();

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
      brandColor: "",
      bankName: "",
      accountName: "",
      accountNumber: "",
      termsOfService: "",
    },
    resolver: zodResolver(businessSchema),
  });

  // const { isPending, mutate } = useMutation({
  //   mutationFn: async (data: PayloadData) => {
  //     const formData = new FormData();
  //     formData.append("fullName", data.fullName);
  //     formData.append("email", data.email);

  //     if (data.phoneNumber) formData.append("phoneNumber", data.phoneNumber);
  //     if (image && cloudinary_preset) {
  //       formData.append("file", image as File);
  //     }
  //     return await updateProfileAction(formData);
  //   },
  //   onSuccess: () => {
  //     toast.success("Profile updated successfully");
  //     setImage(null);
  //   },
  //   onError: (error) => {
  //     if (error?.message) toast.error(error.message);
  //   },
  // });

  const onSubmit = (data: BusinessSchemaType) => {
    console.log(data);
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
  };
};

export interface PayloadData {
  email: string;
  fullName: string;
  phoneNumber?: string;
}

export interface IProfile {
  id: number;
  fullName: string;
  imageUrl: string;
  user_id: string;
  email: string;
  created_at: string;
  phoneNumber: string;
}
