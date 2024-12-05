import { getUser } from "@/app/actions/getUser";
import { CustomHeader } from "@/components/CustomHeader";
import { UserResponse } from "@/types/auth";
import React from "react";
import { BusinessForm } from "./__components/BusinessForm";

const BusinessSettings = async () => {
  const user = (await getUser()) as unknown as UserResponse;
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white-300 overflow-y-auto overflow-x-hidden h-screen relative">
      <CustomHeader title="Business Settings" />
      <BusinessForm user={user?.data} />
    </main>
  );
};

export default BusinessSettings;
