import useModal from "@/hooks/useModal";
import { useRedirect } from "@/hooks/useRedirect";
import axiosInstance from "@/lib/axios";
import { handleError } from "@/lib/helper/handleError";
import { SingleInvoicesAndReceiptsResponseData } from "@/types/invoicesandreceipts";
import { InvoiceAndReceiptType } from "@/zustand/invoiceAndReceiptStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateInvoiceAndReceipt = () => {
  // Access the client
  const queryClient = useQueryClient();
  const { onCancel } = useModal();
  const redirect = useRedirect();
  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: {
      id: string;
      type: InvoiceAndReceiptType;
      issueDate: string;
    }) => {
      if (!payload.id) return;
      const response = await axiosInstance.put(
        `/invoicesandreceipts/${payload.id}`,
        payload
      );
      return response.data;
    },
    onSuccess: (response: SingleInvoicesAndReceiptsResponseData) => {
      if (response.success) {
        toast.success(response.message);
        onCancel;
        // Invalidate and refetch
        queryClient.invalidateQueries({
          queryKey: ["invoicesandreceipts", response?.data?.id],
        });
        redirect(`/invoicesandreceipts/${response.data.type}`);
      }
    },
    onError: handleError,
  });
  return {
    mutate,
    isPending,
  };
};
