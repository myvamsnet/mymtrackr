"use client";
import AddNewLayout from "@/app/(protectedRoute)/_components/AddNewLayout";
import { RecordHeader } from "@/app/(protectedRoute)/_components/common/records/RecordHeader";
import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import { SettingsIcon } from "@/assets/icons/SettingsIcon";
import Link from "next/link";
import React from "react";

export const TypeLayout = ({ children, businessProfileId, type }: Props) => {
  const path = businessProfileId
    ? `/settings/business/${businessProfileId}`
    : `/settings/business`;
  return (
    <PageLayout>
      <RecordHeader
        title={`Invoices and Receipts`}
        leftElement={
          <Link href={path}>
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
  businessProfileId: string;
  type: string;
}
