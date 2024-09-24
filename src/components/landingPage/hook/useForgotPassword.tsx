"use client";
import useModal from "@/hooks/useModal";
import {
  forgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "@/lib/Schema/authSchema";
import { createClient } from "@/lib/supabse/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useForgotPassword = () => {
  const handleForgotPassword = async (data: ForgotPasswordSchemaType) => {
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(data?.email);

    if (error) {
      return {
        error: error.message,
        success: false,
      };
    }

    return {
      success: true,
    };
  };
  const { onConfirm, onCancel, modal } = useModal();
  const { control, handleSubmit, reset } = useForm<ForgotPasswordSchemaType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ForgotPasswordSchemaType) => {
      const res = await handleForgotPassword(data);
      return res;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast("Reset Password Link sent", {
          description:
            "We've sent a password reset link to your email address. Please check your inbox.",
          position: "top-right",
        });
        reset();
        onCancel();
      }

      {
        data?.error && toast.error(data?.error);
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error("An error occurred. Please try again");
    },
  });
  return {
    modal,
    onConfirm,
    onCancel,
    control,
    mutate,
    isPending,
    handleSubmit,
  };
};
