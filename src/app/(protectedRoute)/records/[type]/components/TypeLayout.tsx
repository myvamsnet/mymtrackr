"use client";
import React from "react";
import { RecordHeader } from "../../../_components/common/records/RecordHeader";
import { Filters } from "./Filters";
import { RecordsBalance } from "../../../_components/common/records/RecordsBalance";
import { products } from "@/constant/records";
import AddNewLayout from "@/app/(protectedRoute)/_components/AddNewLayout";

const TypeLayout = ({ children, route }: Props) => {
  const recordType = products?.find((prod) => prod.type === route);
  return (
    <>
      <div className=" h-[90vh] overflow-y-auto p-4 px-3 bg-[#F1F5FD]">
        <RecordHeader title={`${recordType?.title}`} />
        <section className="bg-[#FCFDFE] p-4 rounded-tl-lg rounded-tr-lg grid gap-3">
          <Filters />
          <RecordsBalance />
          {children}
        </section>
      </div>
      <AddNewLayout path={`/records/add/${route}`} />
    </>
  );
};
interface Props {
  children: React.ReactNode;
  route?: string;
}
export default TypeLayout;
