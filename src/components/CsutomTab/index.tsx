import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { useSearchParams } from "next/navigation";
import React from "react";

export const CustomTab = ({ tabs, queryName }: Props) => {
  const searchParams = useSearchParams();
  const active = searchParams.get("status");
  const { updateQueryParams } = useUpdateQuery();
  return (
    <div className="flex justify-between items-center border-b md:px-[44px]">
      {tabs.map((tab) => (
        <button
          tabIndex={tab.id}
          className={`w-[100px] h-[36px] font-medium text-sm flex justify-center items-center capitalize ${
            active === tab.name?.toLowerCase()
              ? "border-b-2 border-primary p-3 text-primary"
              : "text-dark-100"
          } capitalize cursor-pointer`}
          key={tab.id}
          onClick={() =>
            updateQueryParams({
              [queryName]: tab.name?.toLowerCase(),
            })
          }
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

interface Props {
  tabs: {
    name: string;
    id: number;
  }[];
  queryName: string;
}
