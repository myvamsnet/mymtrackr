import { useRedirect } from "@/hooks/useRedirect";
import axiosInstance from "@/lib/axios";
import { resetPassword, ResetPasswordType } from "@/lib/Schema/resetPassword";
import { createClient } from "@/lib/supabse/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useResetPassword = () => {
  const redirect = useRedirect();
  const searchParams = useSearchParams();
  const access_token = searchParams.get("code");
  const supabase = createClient();

  // Set Supabase session when access_token is available
  useEffect(() => {
    if (!access_token) return;
    const setSupabaseSession = async () => {
      const { error: sessionError } = await supabase.auth.setSession({
        access_token,
        refresh_token: access_token,
      });

      if (sessionError) {
        toast.error(sessionError.message);
      }
    };

    setSupabaseSession();
  }, [access_token, supabase]);

  // Initialize form with default values and validation schema
  const { control, handleSubmit } = useForm<ResetPasswordType>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(resetPassword),
  });

  // Mutation for resetting the password
  const mutation = useMutation({
    mutationFn: async (payload: ResetPasswordType) => {
      const { data } = await axiosInstance.post(
        "/auth/change-password",
        payload
      );
      return data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message);
        redirect("/home");
      }
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        // Safely access AxiosError properties
        const errorMessage =
          error.response?.data?.message || "Something went wrong, Try Again";
        toast.error(errorMessage);
      } else if (error instanceof Error) {
        // For non-Axios errors
        toast.error(error.message || "An unknown error occurred");
      } else {
        // Fallback for truly unknown errors
        toast.error("An unknown error occurred");
        console.error(error);
      }
    },
  });

  // Form submission handler
  const onSubmit = (data: ResetPasswordType) => {
    mutation.mutate(data);
  };

  return {
    onSubmit,
    handleSubmit,
    control,
    isPending: mutation.isPending,
  };
};

export default useResetPassword;
