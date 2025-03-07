import axiosInstance from "@/lib/axios";
import { apiParams } from "@/lib/helper/apiParams";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useSearchParams } from "next/navigation";

export const useFetch = <T = AxiosResponse,>(
  endpoint: string,
  param: string,
  key: string,
  queryParam = true,
  staleTime?: number
): UseQueryResult<T, Error> => {
  const searchParams = useSearchParams();

  const values = {
    status: searchParams.get("status") as string,
    searchTerm: searchParams.get("searchTerm") as string,
    page: searchParams.get("page") as string,
    startDate: searchParams.get("startDate") as string,
    endDate: searchParams.get("endDate") as string,
  };
  const controller = new AbortController();
  const fetchData = async () => {
    if (param) {
      const { data } = await axiosInstance.get(`${endpoint}/${param}`, {
        signal: controller.signal,
      });
      return data;
    }

    if (queryParam) {
      const { url } = apiParams(values);
      const { data } = await axiosInstance.get(`${endpoint}?${url}`, {
        signal: controller.signal,
      });
      return data;
    }
    const { data } = await axiosInstance.get(`${endpoint}`, {
      signal: controller.signal,
    });
    return data;
  };
  return useQuery({
    queryKey: [
      key,
      param ?? "",
      values.page ?? "",
      values.status ?? "",
      values.searchTerm ?? "",
      values?.startDate ?? "",
      values?.endDate ?? "",
    ],
    queryFn: fetchData,
    staleTime,
  });
};
