import { fetchReferrals } from "@/service/referrals/fetchReferrals";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useCallback } from "react";

const useGetAllReferrals = () => {
  const searchParam = useSearchParams();
  const status = searchParam.get("status") ?? "";

  // Infinite query for referrals
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
    status: queryStatus,
  } = useInfiniteQuery({
    queryKey: ["referrals", status],
    queryFn: ({ pageParam = 1 }) => fetchReferrals(pageParam, status),
    getNextPageParam: (lastPage) => lastPage?.nextPage ?? null,
    initialPageParam: 1,
  });

  // Memoized scroll handler
  const loadMoreOnScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", loadMoreOnScroll);
    return () => window.removeEventListener("scroll", loadMoreOnScroll);
  }, [loadMoreOnScroll]);

  // Flatten pages to a single referrals array
  const referrals = data?.pages.flatMap((page) => page.data.referrals) ?? [];
  console.log(data?.pages);
  return {
    referrals,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    error,
    queryStatus,
  };
};

export default useGetAllReferrals;

export interface ReferralHistoryResponse {
  pages: Page[];
  pageParams: number[];
}

export interface Page {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  referrals: Referral[];
  totalPages: number;
  page: number;
}

export interface Referral {
  status: string;
  amount: number;
  referee: Referee;
  updated_at: string;
}

export interface Referee {
  id: string;
  fullName: string;
}
