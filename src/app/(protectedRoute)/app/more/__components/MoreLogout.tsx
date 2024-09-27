"use client";
import { LogoutIcon } from "@/assets/icons/LogoutIcon";
import { useLogout } from "@/hooks/useLogout";
import React from "react";

export const MoreLogout = () => {
  const { handleLogout, isPending } = useLogout();
  return (
    <div className="flex border-b-2 border-[#F4F5F7] gap-2 py-6 px-2 items-center bg-off-white-300">
      <div className="h-8 w-8 bg-[#F4F8FF] rounded-full flex justify-center items-center">
        <LogoutIcon />
      </div>

      <button
        onClick={handleLogout}
        className="font-inter font-normal text-base/5 text-red-500"
      >
        {isPending ? "Loading..." : "Logout"}
      </button>
    </div>
  );
};
