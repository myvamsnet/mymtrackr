"use client";
import { useMutation } from "@tanstack/react-query";
import { logoutAction } from "@/app/actions/logoutAction";
import toast from "react-hot-toast";
export const useLogout = () => {
  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async () => {
      await logoutAction();
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
