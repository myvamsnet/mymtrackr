import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { handleError } from "@/lib/helper/handleError";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import useTaskStore from "@/zustand/taskStore";

const useUpdateStatus = () => {
  const { updateQueryParams } = useUpdateQuery();
  const { updateTask } = useTaskStore();
  // Access the client
  const queryClient = useQueryClient();
  // Update Tasks status
  const { mutate } = useMutation({
    mutationFn: async (payload: Partial<TaskStatusPayload>) => {
      if (!payload.id) return;
      const { data } = await axiosInstance.put(`/tasks/${payload.id}`, payload);
      return data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        // Invalidate and refetch
        queryClient.invalidateQueries({
          queryKey: [`tasks`, data?.data?.status ? "completed" : "pending"],
        });
        updateTask(data?.data);
        toast.success(data?.message);
        updateQueryParams({
          status: `${data?.data?.status ? "completed" : "pending"}`,
        });
      }
    },
    onError: handleError,
  });
  const handleChangedStatus = async (
    e: React.ChangeEvent<HTMLInputElement>,
    task: {
      id: string;
      status: boolean;
    }
  ) => {
    // Create the updated task object
    const updatedTask = {
      ...task,
      status: e.target.checked,
    };

    mutate(updatedTask);
  };
  return {
    handleChangedStatus,
    mutate,
  };
};

export default useUpdateStatus;
interface TaskStatusPayload {
  status: boolean;
  id: string;
  title?: string;
}
