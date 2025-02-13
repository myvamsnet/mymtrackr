import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { handleError } from "@/lib/helper/handleError";
import { useSearchParams } from "next/navigation";

import { useState } from "react";
import useTaskStore from "@/zustand/taskStore";

const useDeleteTask = () => {
  const { removeTask } = useTaskStore();
  const [open, setOpen] = useState(false);
  const toggle = (open: boolean) => {
    setOpen(open);
  };
  const searchParam = useSearchParams();
  const queryStatus = searchParam.get("status");
  // Access the client
  const queryClient = useQueryClient();
  // Update Tasks status
  const { mutate, isPending, mutateAsync } = useMutation({
    mutationFn: async (id: string) => {
      if (!id) return;
      const { data } = await axiosInstance.delete(`/tasks/${id}`);
      return data;
    },
    onError: handleError,
  });
  const handleDelete = async (id: string) => {
    const res = await mutateAsync(id);
    if (res.success) {
      removeTask(id);
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [`tasks`, queryStatus ?? ""],
      });
      toast.success(res?.message, {
        id: "delete-task",
      });
      toggle(false);
    }
  };
  return {
    handleDelete,
    deleteLoader: isPending,
    open,
    toggle,
  };
};

export default useDeleteTask;
