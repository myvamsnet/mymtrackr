"use client";
import { useState } from "react";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { SelectWorth } from "./SelectWorth";
import { calculateWorth } from "@/lib/helper/calculateWorth";
import { Records } from "@/types/records";
import useRecordStore from "@/zustand/recordStore";
import { Icons } from "@/assets/icons";
import { User } from "@/types/auth";
import Link from "next/link";

const Balance = ({ user, data }: Props) => {
  const [showBalance, setShowBalance] = useState(true);
  const balanceType = useRecordStore((state) => state.balanceType);

  const handleShowBalance = (showBalance: boolean) => {
    setShowBalance(showBalance);
  };

  return (
    <section className=" bg-primary rounded-xl py-3 grid gap-4 relative">
      <div className="flex justify-between px-2">
        <SelectWorth />
        <Link
          href={"/referral-history?status=trial"}
          className="text-sm leading-[10px] text-primary font-medium bg-off-white rounded-lg px-3 py-px flex justify-center items-center"
        >
          Refer & Earn
        </Link>
      </div>
      <div className="flex justify-between items-center px-4">
        {showBalance ? (
          <p className="text-off-white-300 text-2xl font-semibold">
            {
              // Show GrossWorth or NetWorth based on balanceType state
              balanceType === "gross"
                ? currencyFormatter(Number(data?.grossWorth))
                : currencyFormatter(Number(data?.netWorth))
            }
          </p>
        ) : (
          <p className="text-off-white-300 text-2xl font-semibold">****</p>
        )}
        {
          // Show EyeOpen or EyeOff icon based on showBalance state
          showBalance ? (
            <Icons.EyeOpen
              className="cursor-pointer"
              onClick={() => handleShowBalance(false)}
            />
          ) : (
            <Icons.EyeOff
              className="cursor-pointer"
              onClick={() => handleShowBalance(true)}
            />
          )
        }
      </div>
    </section>
  );
};

export default Balance;
interface Props {
  user: User;
  data: {
    grossWorth: number;
    netWorth: number;
  };
}
