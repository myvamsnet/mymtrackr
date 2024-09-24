import React from "react";
import { Header } from "./__components/Header";
import Balance from "./__components/Balance";
import { RecentRecords } from "./__components/RecentRecords";
import ProtectedLayout from "../_components/layout/ProtectedLayout";
import { getUserProfile } from "@/app/actions/getUserProfile";
import { getAllRecords } from "@/app/actions/AllRecords";
import { Records } from "@/types/records";

const Home = async () => {
  const { data } = await getUserProfile();
  const { data: records, error } = await getAllRecords();
  return (
    <ProtectedLayout>
      <Header data={data} />
      <Balance data={data} records={records as Records[]} />
      <RecentRecords records={records as Records[]} error={error as string} />
    </ProtectedLayout>
  );
};

export default Home;
