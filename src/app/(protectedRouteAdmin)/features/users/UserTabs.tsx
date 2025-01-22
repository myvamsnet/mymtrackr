"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import AdminLayout from "../../__components/AdminLayout";
import { useEffect } from "react";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { userprofile } from "@/app/actions/getAdminUser";
import SearchAndFilterComponent from "../../__components/SearchAndFilterComponent";
import { UsersTable } from "./UsersTable";
import { TabHeader } from "./TabHeader";

export const UserTabs = () => {
  const tabs = [
    {
      name: "All Users",
      path: "/admin/users?status=all",
      number: 590,
      type: "all",
    },
    {
      name: "Subscribed",
      path: "/admin/users?status=active",
      number: 500,
      type: "active",
    },
    {
      name: "Unsubscribed",
      path: "/admin/users?status=trial",
      number: 90,
      type: "trial",
    },
  ];

  const searchParams = useSearchParams();
  const activeStatus = searchParams.get("status");

  const { updateQueryParams } = useUpdateQuery();
  useEffect(() => {
    if (!activeStatus) {
      updateQueryParams({ status: "all" });
    }
  }, [activeStatus, updateQueryParams]);

  return (
    <AdminLayout>
      <TabHeader tabs={tabs} activeStatus={activeStatus as string} />
      <SearchAndFilterComponent showFilter={true} showSearch={true} />
      <UsersTable />
    </AdminLayout>
  );
};

interface UserTabsProps {
  user: userprofile;
}
