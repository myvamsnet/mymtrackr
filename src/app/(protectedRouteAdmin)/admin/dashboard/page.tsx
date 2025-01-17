import React from "react";
import AdminLayout from "../../__components/AdminLayout";
import { Top } from "../../features/dashboard/Top";
import { Statistics } from "../../features/dashboard/Statistics";
import { ChartComp } from "../../features/dashboard/ChartComp";

const DashboardPage = async () => {
  return (
    <AdminLayout>
      <Top />
      <Statistics />
      <section className="container mx-auto p-4 overflow-x-auto">
        <ChartComp />
      </section>
    </AdminLayout>
  );
};

export default DashboardPage;
