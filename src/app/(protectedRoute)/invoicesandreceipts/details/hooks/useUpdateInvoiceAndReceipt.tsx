import { updateInvoiceOrReceipt } from "@/app/actions/updateInvoiceOrReceipt";
import useModal from "@/hooks/useModal";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { handleError } from "@/lib/helper/handleError";
import { SingleInvoicesAndReceiptsResponseData } from "@/types/invoicesandreceipts";
import { InvoiceAndReceiptType } from "@/zustand/invoiceAndReceiptStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateInvoiceAndReceipt = () => {
  // Access the client
  const queryClient = useQueryClient();
  const { updateQueryParams } = useUpdateQuery();
  const { onCancel } = useModal();
  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: {
      id: string;
      type: InvoiceAndReceiptType;
      issueDate: string;
      recordId?: string;
    }) => {
      if (!payload.id) throw new Error("Payload ID is required");
      const response = await updateInvoiceOrReceipt(payload.id, payload);
      if (!response || !response.success) {
        throw new Error(
          response?.error || "Failed to update invoice or receipt"
        );
      }
      return response as SingleInvoicesAndReceiptsResponseData;
    },
    onSuccess: (response: SingleInvoicesAndReceiptsResponseData) => {
      if (response?.success) {
        toast.success(response?.message);
        onCancel();
        updateQueryParams({
          type: "",
        });
        // Invalidate and refetch
        queryClient.invalidateQueries({
          queryKey: ["invoicesandreceipts", response?.data?.id],
        });
        // redirect(`/invoicesandreceipts/${response?.data?.type}`);
      }
    },
    onError: handleError,
  });
  return {
    mutate,
    isPending,
  };
};
