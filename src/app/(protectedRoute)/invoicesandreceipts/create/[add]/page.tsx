import React from "react";
import AddInvoicesAndReceiptForm from "../../_components/AddInvoicesAndReceiptForm";
import PageLayout from "../../../_components/layout/PageLayout";

const page = () => {
  return (
    <PageLayout className="space-y-0 px-3 py-0">
      <AddInvoicesAndReceiptForm />
    </PageLayout>
  );
};

export default page;
