"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetRecordByType } from "@/hooks/useGetRecordByType";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";

export const RecordsBalance = () => {
  const { records, status } = useGetRecordByType();
  const total = records?.reduce((acc, record) => acc + record.amount, 0);
  return (
    <div className="flex justify-between items-center p-3 bg-[#F4F8FF] rounded-lg">
      <h3 className="text-dark font-semibold text-sm">Total</h3>

      {status === "pending" ? (
        <Skeleton className="w-40 h-6 rounded-lg" />
      ) : (
        <p>{currencyFormatter(Number(total) || 0)}</p>
      )}
    </div>
  );
};
