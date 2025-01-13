import React from "react";
import { UserTabs } from "../../features/users/UserTabs";
import { tabs } from "@/constant/admin/tabsList";
import SearchAndFilterComponent from "../../__components/SearchAndFilterComponent";
import { UsersTable } from "../../features/users/UsersTable";
import { getAdminUser, userprofile } from "@/app/actions/getAdminUser";

const UsersPage = async () => {
  const data = await getAdminUser();
  return (
    <UserTabs tabs={tabs} user={data?.data as userprofile}>
      <SearchAndFilterComponent showFilter={true} showSearch={true} />
      <UsersTable />
    </UserTabs>
  );
};

export default UsersPage;
