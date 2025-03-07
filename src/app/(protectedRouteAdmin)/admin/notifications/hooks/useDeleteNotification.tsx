import useModal from "@/hooks/useModal";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import axiosInstance from "@/lib/axios";
import { handleError } from "@/lib/helper/handleError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export const useDeleteNotification = () => {
  const { updateQueryParams } = useUpdateQuery();
  const searchParams = useSearchParams();
  const notificationId = searchParams.get("notificationId");
  const queryClient = useQueryClient();
  const { onCancel, onConfirm, modal } = useModal();
  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      if (!notificationId || id !== notificationId) return null;
      const { data } = await axiosInstance.delete(
        `/notifications/${notificationId}`
      );
      return data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        console.log(data);
        onCancel();
        updateQueryParams({
          notificationId: "",
        });
        // Invalidate and refetch
        queryClient.invalidateQueries({
          queryKey: ["notifications"],
        });
        toast.success(data.message);
      }
    },
    onError: handleError,
  });

  return {
    onConfirm,
    onCancel,
    modal,
    mutate,
    isPending,
  };
};
