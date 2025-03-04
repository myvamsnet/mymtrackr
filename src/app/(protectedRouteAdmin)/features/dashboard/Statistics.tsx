"use client";

import { Profit } from "@/assets/icons/Profit";
import { UsersIcon } from "@/assets/icons/UsersIcon";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { ChartColumn, ChartColumnIncreasing, User } from "lucide-react";

interface StatisticsProps {
  totalIncome: number;
  totalExpense: number;
  totalProfit: number;
  totalUsers: number;
  totalUnsubscribed: number;
  totalSubscribed: number;
}

export const Statistics = ({
  totalIncome,
  totalExpense,
  totalProfit,
  totalUsers,
  totalSubscribed,
  totalUnsubscribed,
}: StatisticsProps) => {
  const statisticsLists = [
    {
      name: "Total Income",
      amount: totalIncome,
      id: 1,
      icon: ChartColumnIncreasing,
      color: "#41B24626",
      type: "currency",
    },
    {
      name: "Total Expense",
      amount: totalExpense,
      icon: ChartColumn,
      id: 2,
      color: "#F9E1E3",
      type: "currency",
    },
    {
      name: "Total Profit",
      amount: totalProfit,
      id: 3,
      icon: Profit,
      color: "#41B24626",
      type: "currency",
    },
    {
      name: "Total Users",
      amount: totalUsers,
      id: 4,
      icon: UsersIcon,
      color: "#246BFD26",
      type: "text",
    },
    {
      name: "Total Subscribed",
      amount: totalSubscribed,
      id: 5,
      icon: User,
      color: "#41B24626",
      type: "text",
    },
    {
      name: "Total Unsubscribed",
      amount: totalUnsubscribed,
      id: 6,
      icon: User,
      color: "#EEEEEE",
      type: "text",
    },
  ];
  return (
    <>
      <section className="py-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {statisticsLists.map((list) => (
          <div
            className="bg-off-white-300 p-6 border border-[#F2F3F3] rounded-xl space-y-5"
            key={list.id}
          >
            <div className="flex items-center gap-3">
              <div
                style={{
                  backgroundColor: list.color,
                }}
                className="h-8 w-8 rounded-full flex items-center justify-center"
              >
                <list.icon width={16} height={16} />
              </div>
              <h4>{list.name}</h4>
            </div>
            <p>
              {list.type === "currency"
                ? currencyFormatter(Number(list.amount))
                : list.amount}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};
