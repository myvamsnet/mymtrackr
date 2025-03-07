"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllRecords } from "@/hooks/useGetAllRecords";
import { calculateWorth } from "@/lib/helper/calculateWorth";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { Records } from "@/types/records";

export const AnalyticsLists = () => {
  const { records, isLoading } = useGetAllRecords();

  const {
    totalDebtor,
    totalExpense,
    totalIncome,
    totalPayable,
    avaliableBalance,
    finalBalance,
  } = calculateWorth(records as Records[]);

  const data = [
    { text: "Total Income", value: totalIncome },
    { text: "Total Expense", value: totalExpense },
    {
      text: "Available Balance",
      value: avaliableBalance,
      className: "text-primary",
    },
    { text: "Total Debtors", value: totalDebtor },
    { text: "Total Payable", value: totalPayable },
    { text: "Final Balance", value: finalBalance, className: "text-success" },
  ];

  return (
    <div className="rounded-b-xl p-4 bg-off-white-300">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between py-5 px-1 border-b bg-off-white`}
        >
          <p
            className={`font-semibold text-xs ${
              item.className || "text-dark-100"
            }`}
          >
            {item.text}
          </p>

          {isLoading ? (
            <Skeleton className="w-40 h-8" />
          ) : (
            <span className={`font-normal text-sm ${item.className || ""}`}>
              {currencyFormatter(item.value)}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
