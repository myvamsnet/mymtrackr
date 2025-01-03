import React from "react";
import { UserTabs } from "../../features/users/UserTabs";
import { tabs } from "@/constant/admin/tabsList";
import SearchAndFilterComponent from "../../__components/SearchAndFilterComponent";
import { UsersTable } from "../../features/users/UsersTable";

const UsersPage = () => {
  return (
    <UserTabs tabs={tabs}>
      <SearchAndFilterComponent showFilter={true} showSearch={true} />
      <UsersTable />
    </UserTabs>
  );
};

export default UsersPage;
