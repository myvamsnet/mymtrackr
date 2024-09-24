"use client";
import { menuItems } from "@/constant/products";
import Link from "next/link";
import React from "react";
import { MoreLogout } from "./MoreLogout";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import toast from "react-hot-toast";
import { app_url } from "@/constant/path";
import { UserProfile } from "@/types/auth";

export const MoreLists = ({ data }: props) => {
  const [doCopy] = useCopyToClipboard();

  const handleCopy = (refId: string, text: string) => {
    doCopy(refId);
    toast.success(text);
  };
  return (
    <section className="bg-off-white-300 rounded-xl p-3 grid gap-2">
      {menuItems?.map((item, index) => (
        <div
          key={index}
          className="flex border-b-2 border-[#F4F5F7] gap-2 py-6 px-2"
        >
          {item.link ? (
            <Link
              href={item.link}
              className={`font-inter font-normal text-base/5 flex items-center gap-2 ${item.textColor} `}
            >
              <div className="h-8 w-8 bg-[#F4F8FF] rounded-full flex justify-center items-center">
                <item.icon />
              </div>
              {item.text}
            </Link>
          ) : (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                if (item.text === "Earn with Referal") {
                  handleCopy(
                    `${app_url}?referCode=${data?.referral_code}`,
                    "Referral link copied"
                  );
                }
              }}
            >
              <div className="h-8 w-8 bg-[#F4F8FF] rounded-full flex justify-center items-center">
                <item.icon fontSize={24} />
              </div>
              {item.text}
            </div>
          )}
        </div>
      ))}
      <MoreLogout />
    </section>
  );
};
interface props {
  data: UserProfile;
}
