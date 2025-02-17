"use client";
import AddNewLayout from "@/app/(protectedRoute)/_components/AddNewLayout";
import { RecordHeader } from "@/app/(protectedRoute)/_components/common/records/RecordHeader";
import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import { SettingsIcon } from "@/assets/icons/SettingsIcon";
import { BusinessData } from "@/types/business";
import Link from "next/link";
import React from "react";

export const TypeLayout = ({ children, businessProfile, type }: Props) => {
  return (
    <PageLayout>
      <RecordHeader
        title={`Invoices and Receipts`}
        leftElement={
          <Link
            href={
              businessProfile?.id
                ? `/settings/business/${businessProfile?.id}`
                : `/settings/business`
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
  businessProfile: BusinessData;
  type: string;
}
