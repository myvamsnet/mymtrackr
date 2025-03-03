import { useQuery } from "@tanstack/react-query";
import { sortArray } from "@/lib/helper/sortData";
import { useParams, useSearchParams } from "next/navigation";
import axiosInstance from "@/lib/axios";
import { Records } from "@/types/records";
import { InvoiceAndReceiptType } from "@/zustand/invoiceAndReceiptStore";
import { InvoicesAndReceiptsResponseData } from "@/types/invoicesandreceipts";
import { useFilterStore } from "@/zustand/useFilterStore";

export const useGetAllInvoicesAndReceipts = () => {
  const { filter } = useFilterStore();
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("searchTerm");
  const { type } = useParams() as {
    type: InvoiceAndReceiptType;
  };

  const values = {
    startDate: filter.startDate,
    endDate: filter.endDate,
    searchTerm,
    type,
  };

  const { data, isLoading, error, status } =
    useQuery<InvoicesAndReceiptsResponseData>({
      queryKey: [
        "invoicesandreceipts",
        values.type,
        values.startDate ?? "",
        values.endDate ?? "",
        searchTerm ?? "",
      ],
      queryFn: async () => {
        const param = new URLSearchParams(Object(values)).toString();
        const { data } = await axiosInstance.get(
          `/invoicesandreceipts/${param ? `?${param}` : ""}`
        );
        return data;
      },
    });

  const invoicesandreceipts = data && sortArray(data?.data, "created_at");
  return {
    invoicesandreceipts,
    isLoading,
    error,
    status,
  };
};

interface RecordsResponse {
  status: string;
  data: Records[];
}
