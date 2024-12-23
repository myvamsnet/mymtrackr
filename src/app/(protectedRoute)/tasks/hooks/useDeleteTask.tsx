import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { handleError } from "@/lib/helper/handleError";
import { useRedirect } from "@/hooks/useRedirect";

const useDeleteTask = () => {
  const redirect = useRedirect();
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
          queryKey: [`tasks-pending`],
        });
        toast.success(data?.message, {
          id: "delete-task",
        });
        return redirect(`/tasks/pending`);
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
