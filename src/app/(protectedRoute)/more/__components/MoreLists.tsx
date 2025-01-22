"use client";
import { menuItems } from "@/constant/products";
import Link from "next/link";
import React from "react";
import { userprofile } from "@/app/actions/getUser";
import { LogoutModal } from "./LogoutModal";
import useModal from "@/hooks/useModal";

export const MoreLists = () => {
  const { onConfirm, modal } = useModal();

  return (
    <section className="h-screen overflow-y-auto">
      <section className="bg-off-white-300 rounded-xl py-3 px-4 grid gap-2 ">
        {menuItems?.map((item, index) => {
          return item?.link ? (
            <Link
              href={item.link}
              key={`${item.text}-${index}`}
              className="flex border-b-2 border-[#F4F5F7] gap-2 py-6 "
              target={item.target ? "_blank" : "_self"}
            >
              <div
                className={`font-inter font-normal text-base/5 flex items-center gap-2 ${item.textColor} `}
              >
                <div className="h-8 w-8 bg-[#F4F8FF] rounded-full flex justify-center items-center">
                  <item.icon />
                </div>
                {item.text}
              </div>
            </Link>
          ) : (
            <div
              className="flex border-b-2 border-[#F4F5F7] gap-2 py-6 px-2 cursor-pointer"
              key={`${item.text}-${index}`}
              onClick={() => {
                if (item.text === "logout") {
                  return onConfirm({
                    type: "logout",
                    isOpen: true,
                  });
                }
              }}
            >
              <div
                className={`font-inter font-normal text-base/5 flex  cursor-pointer items-center gap-2 ${item.textColor} capitalize `}
              >
                <div className="h-8 w-8 bg-[#F4F8FF] rounded-full flex justify-center items-center">
                  <item.icon fontSize={24} />
                </div>
                <span className="text-danger cursor-pointer">{item.text}</span>
              </div>
            </div>
          );
        })}
      </section>
      <LogoutModal />
    </section>
  );
};
interface props {
  data: userprofile;
}
