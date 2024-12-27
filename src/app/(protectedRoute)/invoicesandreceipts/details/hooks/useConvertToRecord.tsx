import { useRedirect } from "@/hooks/useRedirect";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import axiosInstance from "@/lib/axios";
import { calculateGrandTotal } from "@/lib/helper/calculateGrandTotal";
import { handleError } from "@/lib/helper/handleError";
import { Data } from "@/types/invoicesandreceipts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useConvertToRecord = () => {
  const { updateQueryParams } = useUpdateQuery();

  const redirect = useRedirect();
  // Access the client
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: FormPayload) => {
      if (!payload.invoicesAndReceiptsId) return;
      const response = await axiosInstance.post(`/records`, payload);
      return response.data;
    },
    onSuccess: (response) => {
      if (response) {
        toast.success("Converted Successfull");
        // Invalidate and refetch
        queryClient.invalidateQueries({
          queryKey: ["invoicesandreceipts", response?.data?.id],
        });
        updateQueryParams({
          type: "",
        });
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
  type: "income" | "debtor";
  invoicesAndReceiptsId?: string;
}
