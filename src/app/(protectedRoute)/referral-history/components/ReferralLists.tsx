import React, { useEffect } from "react";
import useGetAllReferrals from "../hook/useGetAllRerrals";
import { useSearchParams } from "next/navigation";
import { dateFormatter } from "@/lib/helper/dateFormatter";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { Skeleton } from "@/components/ui/skeleton";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { CustomTab } from "@/components/CsutomTab";

const ReferralLists = () => {
  const { updateQueryParams } = useUpdateQuery();
  const { isFetchingNextPage, referrals, queryStatus } = useGetAllReferrals();
  const pathname = useSearchParams().get("status");
  useEffect(() => {
    if (!pathname) {
      updateQueryParams({
        status: "pending",
      });
    }
  }, [pathname, updateQueryParams]);

  let content;
  if (queryStatus === "pending" && referrals.length === 0) {
    return (content = (
      <div className="animate-pulse">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-4 py-4 border-b border-[#E3E4E7]"
          >
            {/* Name and Date Skeleton */}
            <div className="grid gap-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-20" />
            </div>
            {/* Amount Skeleton */}
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    ));
  }

  console.log(referrals);

  if (queryStatus === "success" && referrals && referrals?.length > 0) {
    content = referrals.map((referral) => (
      <div
        key={referral?.referee?.id}
        className="flex justify-between items-center px-4 py-4 border-b border-[#E3E4E7]"
      >
        <div className="grid gap-2">
          <p className="text-sm font-medium text-dark">
            {referral?.referee?.fullName}
          </p>
          <p className="text-xs text-dark-200">
            {dateFormatter(referral?.updated_at)}
          </p>
        </div>
        <p
          className={`text-sm font-medium capitalize ${
            referral?.status === "pending" ? "text-[#880606]" : "text-success"
          }`}
        >
          {currencyFormatter((referral?.amount as number) || 0)}
        </p>
      </div>
    ));
  }
  if (queryStatus === "success" && referrals && referrals?.length === 0) {
    content = (
      <div className="flex justify-center items-center h-[200px] capitalize">
        <p className="text-sm text-dark-300">
          No <span>{pathname}</span> referrals yet
        </p>
      </div>
    );
  }

  if (queryStatus === "error") {
    content = <p>Error fetching referrals data</p>;
  }
  return (
    <section>
      <CustomTab queryName="status" tabs={lists} />

      <div className="py-2 px-4">{content}</div>

      {isFetchingNextPage && <p>Loading more...</p>}
    </section>
  );
};

export default ReferralLists;
const lists = [
  {
    name: "pending",
    id: 1,
  },
  {
    name: "Earned",
    id: 2,
  },
];
