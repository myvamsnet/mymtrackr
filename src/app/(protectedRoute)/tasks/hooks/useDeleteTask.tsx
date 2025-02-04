import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { handleError } from "@/lib/helper/handleError";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { useSearchParams } from "next/navigation";

const useDeleteTask = () => {
  const searchParam = useSearchParams();
  const queryStatus = searchParam.get("status");
  const { updateQueryParams } = useUpdateQuery();
  // Access the client
  const queryClient = useQueryClient();
  // Update Tasks status
  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      if (!id) return;
      const { data } = await axiosInstance.delete(`/tasks/${id}`);
      return data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        // Invalidate and refetch
        queryClient.invalidateQueries({
          queryKey: [`tasks-${queryStatus as string}`],
        });
        toast.success(data?.message, {
          id: "delete-task",
        });
        updateQueryParams({
          status: queryStatus as string,
        });
      }
    },
    onError: handleError,
  });
  const handleDelete = (id: string) => {
    mutate(id);
  };
  return {
    handleDelete,
    isPending,
  };
};

export default useDeleteTask;
