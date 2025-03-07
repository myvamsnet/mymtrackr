"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/assets/icons";
import { addRecords } from "@/constant/records";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useInvoiceAndReceiptStore from "@/zustand/invoiceAndReceiptStore";

export function DesktopAddRecord() {
  const { clearInvoiceAndReceipt } = useInvoiceAndReceiptStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className=" cursor-pointer flex items-center gap-3">
          <Icons.PlusIcon /> <span className="lg:block hidden">Add Record</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full p-3">
        {addRecords.map((record, i) => (
          <DropdownMenuItem
            key={`${record?.name}-${i}`}
            className={`${cn(
              "p-2  flex items-center justify-center cursor-pointer",
              {
                "text-green-500 focus:text-green-800":
                  record?.type === "income",
                "text-red-500 focus:text-red-800": record?.type === "expense",
                "text-primary focus:text-blue-800": record?.type === "debtor",
                "text-gray-500 focus:text-gray-800": record?.type === "payable",
                "text-capital focus:text-capital": record?.type === "capital",
              }
            )}`}
            onClick={clearInvoiceAndReceipt}
          >
            <DropdownMenuSeparator />
            <Link href={record.path}>{record.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
