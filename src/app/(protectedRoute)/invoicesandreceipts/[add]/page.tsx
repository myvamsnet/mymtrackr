import React from "react";
import AddInvoicesAndReceiptForm from "../_components/AddInvoicesAndReceiptForm";
import { RecordHeader } from "../../_components/common/records/RecordHeader";
import Link from "next/link";
import { SettingsIcon } from "@/assets/icons/SettingsIcon";
import PageLayout from "../../_components/layout/PageLayout";

const page = ({ params }: ParamsProps) => {
  return (
    <PageLayout className="space-y-0 px-3 py-0">
      <RecordHeader
        title={`Add New ${params.add}`}
        leftElement={
          <Link href={"/settings/business"}>
            <SettingsIcon />
          </Link>
        }
      />
      <AddInvoicesAndReceiptForm />
    </PageLayout>
  );
};

export default page;
export interface ParamsProps {
  params: {
    add: "receipt" | "invoice";
  };
}
