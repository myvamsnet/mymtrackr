import React from "react";
import AddInvoicesAndReceiptForm from "../../_components/AddInvoicesAndReceiptForm";
import PageLayout from "../../../_components/layout/PageLayout";
import {
  BusinessProfilePayload,
  getUserBusiness,
} from "@/app/actions/getUserBusiness";
import { BusinessData } from "@/types/business";
import { CheckBusinessAvailableModal } from "../../_components/CheckBusinessAvailableModal";

const page = async ({ params }: InvoiceAndReceiProps) => {
  const data = (await getUserBusiness()) as BusinessProfilePayload;
  return (
    <PageLayout className="space-y-0 px-3 py-0">
      <AddInvoicesAndReceiptForm
        businessProfile={(data?.data as BusinessData) ?? null}
      />
      <CheckBusinessAvailableModal
        businessProfile={data?.data as BusinessData}
        type={params.add as string}
      />
    </PageLayout>
  );
};

export default page;
interface InvoiceAndReceiProps {
  params: {
    add: string;
  };
}
