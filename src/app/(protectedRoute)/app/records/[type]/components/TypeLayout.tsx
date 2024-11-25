"use client";
import React from "react";
import { RecordHeader } from "../../../_components/common/records/RecordHeader";
import { Filters } from "./Filters";
import { RecordsBalance } from "../../../_components/common/records/RecordsBalance";
import Link from "next/link";
import { products, recordTypes } from "@/constant/records";
import { useParams } from "next/navigation";
import { SettingsIcon } from "@/assets/icons/SettingsIcon";

export const TypeLayout = ({ children }: Props) => {
  const { type } = useParams() as {
    type: string;
  };
  const recordType = products?.find((prod) => prod.type === type);
  return (
    <main className="container mx-auto md:max-w-[700px]  overflow-y-auto overflow-x-hidden h-screen relative">
      <div className=" h-[90vh] overflow-y-auto p-4 px-3 bg-[#F1F5FD]">
        <RecordHeader
          title={`${recordType?.title}`}
          leftElement={
            recordType?.type === "invoicesandreceipts" ||
            recordType?.type === "tasks" ? (
              <div>
                <SettingsIcon className=" cursor-pointer" />
              </div>
            ) : (
              ""
            )
          }
        />
        <section className="bg-[#FCFDFE] p-4 rounded-tl-lg rounded-tr-lg grid gap-3">
          <Filters />
          {recordTypes.includes(type) && <RecordsBalance />}
          {children}
        </section>
      </div>
      <div className="absolute right-6 bottom-0 z-30">
        <Link
          href={`/app/records/add/${type}`}
          className="text-xs font-semibold text-off-white-300 font-inter   p-4 rounded-2xl gap-2 bg-primary  flex justify-center items-center my-4 btn-drop-shadow "
        >
          + Add New
        </Link>
      </div>
    </main>
  );
};
interface Props {
  children: React.ReactNode;
}
