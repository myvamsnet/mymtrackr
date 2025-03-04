import React, { Suspense } from "react";
import AdminLayout from "../../__components/AdminLayout";
import { Top } from "../../features/dashboard/Top";
import { Statistics } from "../../features/dashboard/Statistics";
import { ChartComp } from "../../features/dashboard/ChartComp";
import { getFinancialStats } from "@/app/actions/getFinancialStats";

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
  const data = await getFinancialStats(
    searchParams.startDate,
    searchParams.endDate
  );
  // const stats = await getFinancialStats(
  //   searchParams.startDate,
  //   searchParams.endDate
  // );
  // console.log(stats);
  return (
    <AdminLayout>
      <Top />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Statistics {...data} />
      </Suspense>
      <section className="container mx-auto p-4 overflow-x-auto">
        <ChartComp />
      </section>
    </AdminLayout>
  );
};

export default DashboardPage;
interface DashboardPageProps {
  searchParams: {
    startDate: string;
    endDate: string;
  };
}
