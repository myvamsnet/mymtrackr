import React from "react";
import AdminLayout from "../../__components/AdminLayout";
import { Top } from "../../features/dashboard/Top";
import { Statistics } from "../../features/dashboard/Statistics";
import { ChartComp } from "../../features/dashboard/ChartComp";
import { getAdminUser, UserProfile } from "@/app/actions/getAdminUser";

const DashboardPage = async () => {
  const data = await getAdminUser();

  return (
    <AdminLayout user={data?.data as UserProfile}>
      <Top user={data?.data as UserProfile} />
      <Statistics />
      <section className="container mx-auto p-4 overflow-x-auto">
        <ChartComp />
      </section>
    </AdminLayout>
  );
};

export default DashboardPage;
