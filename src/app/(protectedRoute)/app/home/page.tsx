import React, { FC } from "react";
import { Header } from "./__components/Header";
import Balance from "./__components/Balance";
import { RecentRecords } from "./__components/RecentRecords";
import ProtectedLayout from "../_components/layout/ProtectedLayout";
import { getAllRecords } from "@/app/actions/AllRecords";
import { getUser } from "@/app/actions/getUser";
import { UserResponse } from "@/types/auth";
import { Records } from "@/types/records";

const Home: FC = async () => {
  try {
    // Fetch user and records data
    const userResponse = await getUser();
    const recordsResponse = await getAllRecords();

    const user = userResponse as UserResponse;
    const records = recordsResponse?.data as Records[];

    return (
      <ProtectedLayout className="bg-off-white relative">
        <Header user={user?.data} />
        <Balance
          user={user?.data}
          data={records}
        />
        <RecentRecords
          data={records}
          error={recordsResponse?.success ? "" : recordsResponse?.message || ""}
        />
      </ProtectedLayout>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return (
      <ProtectedLayout>
        <p>Failed to load data. Please try again later.</p>
      </ProtectedLayout>
    );
  }
};

export default Home;
