import { useRedirect } from "@/hooks/useRedirect";
import axiosInstance from "@/lib/axios";
import { calculateGrandTotal } from "@/lib/helper/calculateGrandTotal";
import { handleError } from "@/lib/helper/handleError";
import {
  Data,
  SingleInvoicesAndReceiptsResponseData,
} from "@/types/invoicesandreceipts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useConvertToRecord = () => {
  // Access the client
  const queryClient = useQueryClient();
  const redirect = useRedirect();
  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: FormPayload) => {
      if (!payload.invoicesAndReceiptsId) return;
      const response = await axiosInstance.post(`/records`, payload);
      return response.data;
    },
    onSuccess: (response) => {
      if (response) {
        // toast.success(response.message);
        // // Invalidate and refetch
        // queryClient.invalidateQueries({
        //   queryKey: ["invoicesandreceipts", response?.data?.id],
        // });
        // redirect(`/invoicesandreceipts/${response.data.type}`);
      }
    },
    onError: handleError,
  });

  const addConvertToRecord = (data: Data) => {
    const amount = calculateGrandTotal(
      data?.items,
      data?.discount,
      data?.delivery
    );

    const payload = {
      amount,
      name: data?.customerName,
      type: data?.type === "invoices" ? "debtor" : "income",
      invoicesAndReceiptsId: data?.id,
    } as FormPayload;
    mutate(payload);
  };

  return {
    addConvertToRecord,
    isPending,
  };
};

export interface FormPayload {
  amount: number;
  name: string;
  note?: string;
  image?: string;
  type: "income" | "expense" | "payable" | "debtor";
  invoicesAndReceiptsId?: string;
}
