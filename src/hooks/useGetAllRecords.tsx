"use client";
import { Records } from "@/types/records";
import { useQuery } from "@tanstack/react-query";
import { sortArray } from "@/lib/helper/sortData";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/lib/axios";

export const useGetAllRecords = () => {
  const searchParams = useSearchParams();
  const yearlyRange = searchParams.get("year");
  const monthlyRange = searchParams.get("month");
  const searchTerm = searchParams.get("searchTerm");

  const startDate = dayjs(monthlyRange)
    .year(Number(yearlyRange))
    .format("YYYY-MM-DD");

  const endDate = dayjs(yearlyRange)
    .month(Number(monthlyRange))
    .add(1, "day")
    .format("YYYY-MM-DD");
  const values = {
    startDate,
    endDate,
    searchTerm,
  };
  const { data, isLoading, error, status } = useQuery<RecordsResponse>({
    queryKey: ["records", searchTerm ?? "", values ?? ""],
    queryFn: async () => {
      const param = new URLSearchParams(Object(values)).toString();

      const { data } = await axiosInstance.get(
        `/records/${param ? `?${param}` : ""}`
      );
      return data;
    },
  });

  const records = data?.data && sortArray(data?.data, "updated_at");

  return {
    records,
    isLoading,
    status,
    error,
  };
};

interface RecordsResponse {
  status: string;
  data: Records[];
}
