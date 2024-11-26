import { CustomHeader } from "@/components/CustomHeader";
import { InputType, typeListInput } from "@/constant/createRecords";
import { ParamsProps } from "@/types/records";
import React from "react";
import { AddRecordForm } from "./components/AddRecordForm";

const AddRecord = ({ params }: ParamsProps) => {
  let content;
  const inputLists = typeListInput(params.type) as InputType[];
  const recordType = ["expense", "income", "debtor", "payable"];

  if (recordType.includes(params.type)) {
    return (content = (
      <main className="container mx-auto  md:max-w-[700px] font-inter lg:p-0 px-3 gap-4   my-3">
        <CustomHeader title={params.type} />

        <AddRecordForm
          title={params.type}
          inputlists={inputLists}
          recordType={params.type as RecordType}
        />
      </main>
    ));
  }
  if (params.type === "invoicesandreceipts") {
    return (
      <main className="container mx-auto  md:max-w-[700px] font-inter lg:p-0 px-3 gap-4   my-3">
        <CustomHeader
          title={
            params.type === "invoicesandreceipts" ? "Invoices and receipts" : ""
          }
        />

        <h2>Hello invoicesandreceipts</h2>
      </main>
    );
  }
  if (params.type === "tasks") {
    return (
      <main className="container mx-auto  md:max-w-[700px] font-inter lg:p-0 px-3 gap-4   my-3">
        <CustomHeader title={params.type} />

        <h2>Hello Task</h2>
      </main>
    );
  }
};

export default AddRecord;
type RecordType = "expense" | "income" | "debtor" | "payable";
