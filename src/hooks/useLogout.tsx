"use client";
import { useRedirect } from "@/hooks/useRedirect";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";
import useModal from "./useModal";
export const useLogout = () => {
  const { onCancel } = useModal();
  const redirect = useRedirect();
  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.post("/auth/logout");
      return res.data;
    },
    onSuccess: async (data) => {
      if ((data?.status as string) === "success") {
        toast.success(data.message);
        onCancel();
        return redirect("/");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleLogout = () => {
    mutate();
  };
  return {
    isError,
    isPending,
    error,
    handleLogout,
  };
};
