import { useRedirect } from "@/hooks/useRedirect";
import axiosInstance from "@/lib/axios";
import { handleError } from "@/lib/helper/handleError";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export const useDeleteInvoiceAndReceipt = () => {
  const { id } = useParams() as {
    id: string;
  };
  const redirect = useRedirect();
  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: string) => {
      if (!id && payload !== id) return;
      const data = await axiosInstance.delete(`/invoicesandreceipts/${id}`);
      return data;
    },
    onSuccess: () => {
      toast.success("Deleted Successfully");
      redirect(`/invoicesandreceipts/invoices`);
    },
    onError: handleError,
  });
  return {
    deleteMutation: mutate,
    deleteLoader: isPending,
  };
};
