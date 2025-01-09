import axiosInstance from "@/lib/axios";
import { handleError } from "@/lib/helper/handleError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const useDeleteContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Access the client
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: async (id: string) => {
      if (!id) return;
      const { data } = await axiosInstance.delete(`/admin/contents/${id}`);
      return data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["contents"] });
        toast.success(data?.message);
        setIsOpen(false);
      }
    },
    onError: handleError,
  });

  return {
    mutate,
    isPending,
    isOpen,
    setIsOpen,
  };
};

export default useDeleteContent;
