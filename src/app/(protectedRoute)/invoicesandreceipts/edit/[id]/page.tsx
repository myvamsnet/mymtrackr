import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import React from "react";
import EditInvoicesAndReceiptForm from "../components/EditInvoicesAndReceiptForm";
import {
  fetchInvoiceAndReceiptById,
  InvoicesandreceiptResponse,
} from "@/app/actions/fetchInvoiceAndReceiptById";

const EditInvoicesandreceipts = async ({ params }: Props) => {
  const { data: invoicesAndReceiptData } = (await fetchInvoiceAndReceiptById(
    params.id
  )) as InvoicesandreceiptResponse;

  return (
    <PageLayout className="space-y-0 px-3 py-0">
      {invoicesAndReceiptData && (
        <EditInvoicesAndReceiptForm data={invoicesAndReceiptData} />
      )}
    </PageLayout>
  );
};

export default EditInvoicesandreceipts;
interface Props {
  params: {
    id: string;
  };
}
