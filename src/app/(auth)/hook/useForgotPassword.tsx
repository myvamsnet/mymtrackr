"use client";
import { forgotPasswordAction } from "@/app/actions/forgotPasswordAction";
import {
  forgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "@/lib/Schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useForgotPassword = () => {
  const { control, handleSubmit, reset } = useForm<ForgotPasswordSchemaType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ForgotPasswordSchemaType) => {
      const formData = new FormData();
      formData.append("email", data.email);
      const res = await forgotPasswordAction(formData);
      return res;
    },
    onSuccess: (data) => {
      if (data?.success) {
        reset();
        return toast.success(data.message);
      }
      return toast.error(data?.message);
    },
    onError: (error) => {
      if (
        error?.message !== undefined &&
        error?.message !== null &&
        error?.message !== ""
      ) {
        toast.error("Something went wrong , Try Again");
      }
      return;
    },
  });
  return {
    control,
    mutate,
    isPending,
    handleSubmit,
  };
};
