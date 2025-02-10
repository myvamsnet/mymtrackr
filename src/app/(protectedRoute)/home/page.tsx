import React, { FC, Suspense } from "react";
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
import CustomLoader from "@/components/CustomLoader/page";

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
    <ProtectedLayout className="bg-off-white relative pb-40">
      <Suspense fallback={<CustomLoader />}>
        <Header user={user?.data} />
        <Balance user={user?.data} data={balance} />
        <RecentRecords
          data={records}
          error={recordsResponse?.success ? "" : recordsResponse?.message || ""}
        />
      </Suspense>
    </ProtectedLayout>
  );
};

export default Home;
