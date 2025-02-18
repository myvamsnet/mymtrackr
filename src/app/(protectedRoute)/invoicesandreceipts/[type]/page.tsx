import React from "react";
import { TypeLayout } from "./_components/TypeLayout";
import InvoicesLists from "./_components/InvoicesLists";
import { getUser, UserResponseData } from "@/app/actions/getUser";
import { User } from "@/types/auth";
import {
  BusinessProfilePayload,
  getUserBusiness,
} from "@/app/actions/getUserBusiness";

interface Props {
  params: {
    type: string;
  };
}
const Invoicesandreceipts = async ({ params }: Props) => {
  const data = (await getUserBusiness()) as BusinessProfilePayload;
  return (
    <TypeLayout
      businessProfileId={data?.data?.id as string}
      type={params?.type}
    >
      <InvoicesLists />
    </TypeLayout>
  );
};

export default Invoicesandreceipts;
