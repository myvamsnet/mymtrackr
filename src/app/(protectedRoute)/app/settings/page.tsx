"use client";

import { PenBook } from "@/assets/icons/PenBook";
import { Delete } from "@/assets/icons/Delete";
import Link from "next/link";
import React from "react";
import { CustomHeader } from "@/components/CustomHeader";
import ResetPasswordModal from "./__components/ResetPasswordModal";
import { BusinessIcon } from "@/assets/icons/BusinessIcon";

const Settings = () => {
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen py-2">
      <section className="bg-off-white  font-inter  px-3 gap-4   my-3">
        <CustomHeader
          title="Settings"
          link="/"
        />
        <div className="bg-off-white-300 rounded-xl py-4">
          {lists?.map((list) => {
            return list.name === "reset-password" ? (
              <ResetPasswordModal key={list.name} />
            ) : (
              <Link
                href={list.path}
                className={`flex items-center cursor-pointer text-sm font-normal p-4 gap-2 border-b ${
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
                    />
                  </div>
                )}
                {list.name}
              </Link>
            );
          })}
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
    path: "/app/settings/profile",
  },
  {
    name: "Business Settings",
    icon: BusinessIcon,
    path: "/app/settings/business",
  },
  {
    name: "reset-password",
    path: "#",
  },
  {
    name: "Delete Account",
    icon: Delete,
    path: "#",
  },
];
