"use client";
import React, { useEffect } from "react";
import { ReferalTop } from "./ReferalTop";
import { TabHeader } from "../TabHeader";
import { useParams, useSearchParams } from "next/navigation";
import { ReferalTable } from "./ReferalTable";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { User } from "@/types/auth";

const ReferalPage = ({ user }: ReferalPageProps) => {
  const params = useParams() as {
    id: string;
  };

  const searchParams = useSearchParams();
  const activeStatus = searchParams.get("status");
  const { updateQueryParams } = useUpdateQuery();
  useEffect(() => {
    if (!activeStatus) {
      updateQueryParams({ status: "all" });
    }
  }, [activeStatus, updateQueryParams]);
  const tabs = [
    {
      name: "All Users",
      path: `/admin/users/${params?.id}?status=all`,
      number: 590,
      type: "all",
    },
    {
      name: "Subscribed",
      path: `/admin/users/${params?.id}?status=active`,
      number: 500,
      type: "active",
    },
    {
      name: "Unsubscribed",
      path: `/admin/users/${params?.id}?status=pending`,
      number: 90,
      type: "pending",
    },
  ];

  return (
    <section className="space-y-10">
      <ReferalTop user={user} />
      <TabHeader tabs={tabs} activeStatus={activeStatus as string} />
      <ReferalTable />
    </section>
  );
};

export default ReferalPage;
interface ReferalPageProps {
  user: User;
}
