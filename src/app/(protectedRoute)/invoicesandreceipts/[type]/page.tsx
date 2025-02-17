import React from "react";
import { TypeLayout } from "./_components/TypeLayout";
import InvoicesLists from "./_components/InvoicesLists";
import {
  BusinessProfilePayload,
  getUserBusiness,
} from "@/app/actions/getUserBusiness";
import { BusinessData } from "@/types/business";

interface Props {
  params: {
    type: string;
  };
}
const Invoicesandreceipts = async ({ params }: Props) => {
  const data = (await getUserBusiness()) as BusinessProfilePayload;
  return (
    <TypeLayout
      businessProfile={data?.data as BusinessData}
      type={params?.type}
    >
      <InvoicesLists />
    </TypeLayout>
  );
};

export default Invoicesandreceipts;
