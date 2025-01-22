import React from "react";
import ChangePassword from "../__components/ChangePassword";
import { CustomHeader } from "@/components/CustomHeader";

const page = () => {
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white-300 overflow-y-auto overflow-x-hidden h-screen relative">
      <CustomHeader title="Reset Password" />
      <ChangePassword />
    </main>
  );
};

export default page;
