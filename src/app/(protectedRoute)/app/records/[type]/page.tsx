import React from "react";
import { RecordTypeLists } from "./components/RecordTypeLists";
import { ParamsProps } from "@/types/records";
import { recordTypes } from "@/constant/records";
import { TypeLayout } from "./components/TypeLayout";
import { Invoicesandreceipts } from "./components/Invoicesandreceipts";

const RecordType = async ({ params }: ParamsProps) => {
  let content;
  if (recordTypes.includes(params.type)) {
    return (content = (
      <TypeLayout>
        <RecordTypeLists />
      </TypeLayout>
    ));
  }

  if (params.type === "tasks") {
    return (content = (
      <TypeLayout>
        <h2>Tasks</h2>
      </TypeLayout>
    ));
  }
  if (params.type === "invoicesandreceipts") {
    return (content = (
      <TypeLayout>
        <Invoicesandreceipts />
      </TypeLayout>
    ));
  }
  return content;
};

export default RecordType;
