import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import React from "react";
import EditInvoicesAndReceiptForm from "../components/EditInvoicesAndReceiptForm";
import { getInvoicesAndReceiptsById } from "@/app/actions/getInvoicesAndReceiptsById";

const EditInvoicesandreceipts = async ({ params }: Props) => {
  const data = await getInvoicesAndReceiptsById(params?.id);
  return (
    <PageLayout className="space-y-0 px-3 py-0">
      {data?.data && <EditInvoicesAndReceiptForm data={data.data} />}
    </PageLayout>
  );
};

export default EditInvoicesandreceipts;
interface Props {
  params: {
    id: string;
  };
}
