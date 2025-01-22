import Link from "next/link";
import React from "react";

export const TabHeader = ({ tabs, activeStatus }: Props) => {
  return (
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
          {tab.name}
        </Link>
      ))}
    </header>
  );
};
interface Props {
  tabs: {
    name: string;
    path: string;
    number: number;
    type: string;
  }[];
  activeStatus: string;
}
