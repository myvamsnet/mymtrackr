import React, { FC } from "react";
import { getAllRecords } from "@/app/actions/AllRecords";
import { getUser } from "@/app/actions/getUser";
import { UserResponse } from "@/types/auth";
import { Records } from "@/types/records";
import { getAllBalance } from "@/app/actions/getAllBalance";
import { redirect } from "next/navigation";
import { Header } from "./__components/Header";
import Balance from "./__components/Balance";
import { RecentRecords } from "./__components/RecentRecords";

const Home: FC = async () => {
  const [getBalance, recordsResponse, userResponse] = await Promise.all([
    getAllBalance(),
    getAllRecords(),
    getUser(), // Assuming you have a function to fetch user data
  ]);

  // Ensure the response data is cast correctly
  const user = userResponse as UserResponse;
  const records = recordsResponse?.data as unknown as Records[];
  const balance = {
    netWorth: getBalance?.netWorth as number,
    grossWorth: getBalance?.grossWorth as number,
  };

  if (user?.data?.role === "admin") return redirect("/admin/dashboard");
  return (
    <>
      <Header user={user?.data} />
      <Balance user={user?.data} data={balance} />
      <RecentRecords
        data={records}
        error={recordsResponse?.success ? "" : recordsResponse?.message || ""}
      />
    </>
  );
};

export default Home;
