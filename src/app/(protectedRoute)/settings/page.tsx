"use client";
import { PenBook } from "@/assets/icons/PenBook";
import { Delete } from "@/assets/icons/Delete";
import Link from "next/link";
import React from "react";
import { CustomHeader } from "@/components/CustomHeader";
import ResetPasswordModal from "./__components/ResetPasswordModal";
import { BusinessIcon } from "@/assets/icons/BusinessIcon";
import userStore from "@/zustand/userStore";
import { Lock, SquareAsterisk } from "lucide-react";

const Settings = () => {
  const { user } = userStore();
  const businessData = user?.businessProfile;
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
                    height={18}
                    width={18}
                  />
                </div>
              )}
              {list.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Settings;
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
  {
    name: "Delete Account",
    icon: Delete,
    path: "#",
  },
];
