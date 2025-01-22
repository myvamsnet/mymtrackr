"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGetAllInvoicesAndReceipts } from "../../hooks/useGetAllInvoicesAndReceipts";
import { InvoiceAndReceiptType } from "@/zustand/invoiceAndReceiptStore";
import { LoadingRecords } from "@/components/LoadingRecords";
import { DataNotFound } from "@/components/DataNotFound";
import { Items } from "./Items";
import { Filters } from "./Filters";

function InvoicesLists() {
  const { invoicesandreceipts, status } = useGetAllInvoicesAndReceipts();
  const { type } = useParams() as {
    type: InvoiceAndReceiptType;
  };

  return (
    <>
      <section className="bg-off-white-400 p-4 rounded-tl-lg rounded-tr-lg grid gap-3">
        <Filters />
      </section>
      <section className="bg-off-white-400 p-3 rounded-xl">
        <div className="flex justify-between items-center border-b px-[44px]">
          {tabs.map((tab) => (
            <Link
              href={`/invoicesandreceipts/${tab.value}`}
              className={`w-[48px] h-[36px] font-medium text-sm flex justify-center items-center ${
                type === tab.value
                  ? "border-b-2 border-primary p-3 text-primary"
                  : "text-dark-100"
              } capitalize cursor-pointer`}
              key={tab.id}
            >
              {tab.label}
            </Link>
          ))}
        </div>
        <section className="p-3">
          {status === "pending" && <LoadingRecords />}
          {invoicesandreceipts && invoicesandreceipts?.length === 0 && (
            <DataNotFound message={type} />
          )}
          {invoicesandreceipts &&
            invoicesandreceipts?.length > 0 &&
            status === "success" &&
            invoicesandreceipts?.map((list) => (
              <Items
                key={list.id}
                list={list}
              />
            ))}
        </section>
      </section>
    </>
  );
}

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
export default InvoicesLists;
