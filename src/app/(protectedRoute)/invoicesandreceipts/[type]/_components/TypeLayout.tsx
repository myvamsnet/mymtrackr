"use client";
import AddNewLayout from "@/app/(protectedRoute)/_components/AddNewLayout";
import { RecordHeader } from "@/app/(protectedRoute)/_components/common/records/RecordHeader";
import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import { SettingsIcon } from "@/assets/icons/SettingsIcon";
import { useGetUser } from "@/hooks/useGetUser";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export const TypeLayout = ({ children }: Props) => {
  const { user } = useGetUser();
  const businessData = user?.businessProfile;
  const { type } = useParams() as {
    type: string;
  };
  return (
    <PageLayout>
      <RecordHeader
        title={`Invoices and Receipts`}
        leftElement={
          <Link
            href={
              businessData?.id ? `/settings/business/${businessData?.id}` : ``
            }
          >
            <SettingsIcon />
          </Link>
        }
        url="/records"
      />
      {children}
      <AddNewLayout path={`/invoicesandreceipts/create/${type}`} />
    </PageLayout>
  );
};
interface Props {
  children: React.ReactNode;
}
