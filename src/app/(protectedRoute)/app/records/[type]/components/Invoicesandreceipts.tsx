"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import Link from "next/link";
import { useState } from "react";

export function Invoicesandreceipts() {
  const [active, setActive] = useState<string>("invoices");
  const lists = [
    {
      name: "Ilori Oluwaferanmi",
      issueDate: "24 Apr 2024",
      dueDate: "24 Apr 2024",
      itemQuantity: 5,
      total: 2000,
      id: 1,
      type: "invoices",
    },
    {
      name: "Felix Olawole",
      issueDate: "24 Apr 2024",
      dueDate: "24 Apr 2024",
      itemQuantity: 5,
      total: 78000,
      id: 2,
      type: "receipts",
    },
    {
      name: "Master Dami",
      issueDate: "24 Apr 2024",
      dueDate: "24 Apr 2024",
      itemQuantity: 5,
      total: 13000,
      id: 3,
      type: "receipts",
    },
  ];
  const results = lists?.filter((list) => list.type === active);
  console.log(results);
  return (
    <Tabs
      defaultValue="invoices"
      className="w-full"
      onValueChange={(value: string) => {
        console.log(value);
        return setActive(value);
      }}
    >
      <TabsList className="flex justify-between items-center px-[44px] border-b border-gray-400">
        {tabs.map((tab) => (
          <TabsTrigger
            value={tab.value as string}
            className={`w-[48px] h-[36px] font-medium text-sm flex justify-center items-center ${
              active === tab.value
                ? "border-b-2 border-primary p-3 text-primary"
                : "text-dark-100"
            } capitalize`}
            key={tab.id}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent
        className="bg-[#FBFCFF] px-4"
        value={active as string}
      >
        {results?.map((list) => (
          <Link
            href={`/app/records/invoice-and-receipt/${list.id}`}
            className="flex justify-between py-4 border-b border-[#F4F5F7]"
            key={list.id}
          >
            <div className=" space-y-2">
              <h4 className="text-dark font-medium text-sm">{list.name}</h4>
              <p className="text-dark-200 font-normal text-sm">
                2 Items, 05 Apr 2024
              </p>
              <p className="text-dark-100 font-normal text-sm">
                Due 05 Apr 2024
              </p>
            </div>
            <span>{currencyFormatter(list.total)}</span>
          </Link>
        ))}
      </TabsContent>
    </Tabs>
  );
}
type tabbsType = "invoices" | "receipts";
const tabs = [
  {
    value: "invoices",
    label: "Invoices",
    id: 1,
  },
  {
    value: "receipts",
    label: "Receipts",
    id: 2,
  },
];