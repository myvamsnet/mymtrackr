import React from "react";
import { CustomHeader } from "./CustomHeader";

const CustomErrorMessage = () => {
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen p-4 flex flex-col items-center justify-center">
      <CustomHeader title="Subscription" link="/more" />
      <p className="text-red-500">
        Failed to load subscription details. Please try again later.
      </p>
    </main>
  );
};

export default CustomErrorMessage;
