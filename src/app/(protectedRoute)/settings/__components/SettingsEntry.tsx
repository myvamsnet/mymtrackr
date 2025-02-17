"use client";
import { PenBook } from "@/assets/icons/PenBook";

import Link from "next/link";
import React from "react";
import { CustomHeader } from "@/components/CustomHeader";
import { BusinessIcon } from "@/assets/icons/BusinessIcon";
import { Lock } from "lucide-react";
import { ConfirmAccountDelete } from "./ConfirmAccountDelete";
import { BusinessData } from "@/types/business";

const SettingsEntry = ({ businessData }: Props) => {
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen py-2">
      <section className="bg-off-white  font-inter  px-3 gap-4   my-3">
        <CustomHeader title="Settings" link="/more" />
        <div className="bg-off-white-300 rounded-xl py-4">
          {lists?.map((list) => (
            <Link
              href={
                list.path === "/settings/business" && businessData?.id
                  ? `${list.path}/${businessData?.id}`
                  : list.path
              }
              className={`flex items-center cursor-pointer text-sm font-normal p-4 gap-2 border-b capitalize ${
                list.name === "Delete Account"
                  ? "text-danger-500"
                  : "text-dark "
              }`}
              key={list.name}
            >
              {list.icon && (
                <div className="h-8 w-8 bg-off-white rounded-full flex justify-center items-center">
                  <list.icon
                    color={
                      list.name === "Delete Account" ? "#C25353" : "#010114"
                    }
                    className="h-4 w-4"
                  />
                </div>
              )}
              {list.name}
            </Link>
          ))}
          <ConfirmAccountDelete />
        </div>
      </section>
    </main>
  );
};

interface Props {
  businessData: BusinessData | null;
}

export default SettingsEntry;
const lists = [
  {
    name: "Edit profile",
    icon: PenBook,
    path: "/settings/profile",
  },
  {
    name: "Business Settings",
    icon: BusinessIcon,
    path: "/settings/business",
  },
  {
    name: "Reset Password",
    path: "/settings/reset-password",
    icon: Lock,
  },
];
