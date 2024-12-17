"use client";
import { useMutation } from "@tanstack/react-query";
import { logoutAction } from "@/app/actions/logoutAction";
import toast from "react-hot-toast";
import useModal from "./useModal";
export const useLogout = () => {
  const { onCancel } = useModal();
  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async () => {
      await logoutAction();
    },
    onSuccess: () => {
      onCancel();
      toast.success("Logut Successfully");
    },
    onError: (error) => {
      if (error) {
        toast.error("Something wrent wrong");
      }
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
