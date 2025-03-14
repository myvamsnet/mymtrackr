import React, { FC } from "react";
import { Header } from "./__components/Header";
import Balance from "./__components/Balance";
import { RecentRecords } from "./__components/RecentRecords";
import ProtectedLayout from "../_components/layout/ProtectedLayout";
import { getAllRecords } from "@/app/actions/AllRecords";
import { getUser } from "@/app/actions/getUser";
import { UserResponse } from "@/types/auth";
import { Records } from "@/types/records";
import { getAllBalance } from "@/app/actions/getAllBalance";
import { redirect } from "next/navigation";

const Home = async () => {
  try {
    const [balanceData, recordsResponse, userResponse] = await Promise.all([
      getAllBalance(),
      getAllRecords(),
      getUser(),
    ]);

    const user = userResponse?.data as UserResponse["data"];
    if (user?.role === "admin") return redirect("/admin/dashboard");

    const records = (recordsResponse?.data as Records[]) || [];
    const balance = {
      finalBalance: balanceData?.finalBalance || 0,
      avaliableBalance: balanceData?.avaliableBalance || 0,
      profit: balanceData?.profit || 0,
    };

    return (
      <ProtectedLayout className="bg-off-white relative pb-40" user={user}>
        <Header user={user} />
        <Balance user={user} data={balance} />
        <RecentRecords
          data={records}
          error={
            !recordsResponse?.success && records.length === 0
              ? recordsResponse?.message ||
                "No records available or failed to load."
              : ""
          }
        />
      </ProtectedLayout>
    );
  } catch (error) {
    return (
      <ProtectedLayout className="bg-off-white relative pb-40 flex items-center justify-center">
        <p className="text-red-500">
          Something went wrong. Please try again later.
        </p>
      </ProtectedLayout>
    );
  }
};

export default Home;
