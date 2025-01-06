"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import AdminLayout from "../../__components/AdminLayout";
import { useEffect } from "react";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";

export const UserTabs = ({ children, tabs }: UserTabsProps) => {
  const searchParams = useSearchParams();
  const activeStatus = searchParams.get("status");

  const { updateQueryParams } = useUpdateQuery();
  useEffect(() => {
    if (!activeStatus) {
      updateQueryParams({ status: "all" });
    }
  }, [activeStatus, updateQueryParams]);

  return (
    <AdminLayout>
      <header className="border-b border-[#D9DADB] flex items-center gap-7 py-4 md:h-[51px] h-10 md:justify-start justify-between my-4">
        {tabs?.map((tab, i) => (
          <Link
            key={`tab-${tab.type}-${i}`}
            href={tab.path}
            className={` md:h-[51px] h-10 block md:text-base text-xs leading-[19.36px] font-normal ${
              activeStatus === tab.type
                ? "border-b border-primary  text-primary font-semibold"
                : " text-dark-300"
            }`}
          >
            {tab.name} ({tab.number})
          </Link>
        ))}
      </header>
      {children}
    </AdminLayout>
  );
};

interface UserTabsProps {
  children: React.ReactNode;
  tabs: {
    name: string;
    path: string;
    number: number;
    type: string;
  }[];
}
