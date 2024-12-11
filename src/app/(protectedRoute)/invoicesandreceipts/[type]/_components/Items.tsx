import { calculateGrandTotal } from "@/lib/helper/calculateGrandTotal";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { Data } from "@/types/invoicesandreceipts";
import { InvoiceAndReceiptType } from "@/zustand/invoiceAndReceiptStore";
import dayjs from "dayjs";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export const Items = ({ list }: ItemType) => {
  const { type } = useParams() as {
    type: InvoiceAndReceiptType;
  };
  return (
    <Link
      href={`/invoicesandreceipts/details/${list.id}`}
      className="flex justify-between py-4 border-b border-[#F4F5F7]"
      key={list.id}
    >
      <div className=" space-y-2">
        <h4 className="text-dark font-medium text-sm">{list?.customerName}</h4>
        <p className="text-dark-200 font-normal text-sm">
          {list.items?.length} Items,{" "}
          {dayjs(list.issueDate).format("MMM D, YYYY")}
        </p>
        {type === "invoices" && (
          <p className="text-dark-100 font-normal text-sm">
            Due {dayjs(list.dueDate).format("MMM D, YYYY")}
          </p>
        )}
      </div>
      <span>
        {currencyFormatter(
          calculateGrandTotal(list.items, list.discount, list.delivery)
        )}
      </span>
    </Link>
  );
};
interface ItemType {
  list: Data;
}
