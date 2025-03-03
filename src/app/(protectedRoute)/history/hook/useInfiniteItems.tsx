import axiosInstance from "@/lib/axios";
import { sortArray } from "@/lib/helper/sortData";
import { Records, RecordsResponse } from "@/types/records";
import { useFilterStore } from "@/zustand/useFilterStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";

interface RecordsPage {
  data: RecordsResponse;
  nextCursor?: number; // or whatever indicates the next page
}

const useInfiniteItems = () => {
  const { filter } = useFilterStore();
  const searchParam = useSearchParams();
  const { startDate, endDate } = filter;
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<RecordsPage>({
    queryKey: ["records-infinite", startDate ?? "", endDate ?? ""],
    queryFn: async ({ pageParam = 0 }) => {
      const values = {
        startDate,
        endDate,
        pageParam,
      };
      const param = new URLSearchParams(values as any).toString();

      const { data } = await axiosInstance.get<RecordsPage>(
        `/records/${param ? `?${param}` : ""}`
      );
      return data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor, // Adjust according to your pagination logic
  });

  const records = data?.pages.flatMap(
    (page) => page.data
  ) as unknown as Records[];

  return {
    records: records ?? [],
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export default useInfiniteItems;
