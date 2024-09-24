import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { sortArray } from "@/lib/helper/sortData";
import { useParams, useSearchParams } from "next/navigation";
import axiosInstance from "@/lib/axios";
import { Records } from "@/types/records";

export const useGetRecordByType = () => {
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("searchTerm");
  const { type } = useParams();
  const today = dayjs().add(1, "day");
  const currentDate = dayjs().format("YYYY-MM-DD");
  const startDate = searchParam.get("startDate") ?? currentDate;
  const endDate =
    searchParam.get("endDate") ?? dayjs(today).format("YYYY-MM-DD");

  const values = {
    startDate,
    endDate,
    searchTerm,
    type,
  };

  const { data, isLoading, error, status } = useQuery<RecordsResponse>({
    queryKey: [
      "records",
      type,
      startDate ?? "",
      endDate ?? "",
      searchTerm ?? "",
    ],
    queryFn: async () => {
      const param = new URLSearchParams(Object(values)).toString();

      const { data } = await axiosInstance.get(
        `/records/type${param ? `?${param}` : ""}`
      );
      return data;
    },
  });

  const records = data && sortArray(data?.data, "updateat");
  return {
    records,
    isLoading,
    error,
    status,
  };
};

interface RecordsResponse {
  status: string;
  data: Records[];
}
