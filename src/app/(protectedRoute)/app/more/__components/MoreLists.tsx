"use client";
import { menuItems } from "@/constant/products";
import Link from "next/link";
import React from "react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import toast from "react-hot-toast";
import { app_url } from "@/constant/path";
import { UserProfile } from "@/app/actions/getUser";
import { LogoutModal } from "./LogoutModal";

export const MoreLists = ({ data }: props) => {
  const [doCopy] = useCopyToClipboard();

  const handleCopy = (refId: string, text: string) => {
    doCopy(refId);
    toast.success(text);
  };
  return (
    <section className="bg-off-white-300 rounded-xl p-3 grid gap-2">
      {menuItems?.map((item, index) => {
        return item?.link ? (
          <Link
            href={item.link}
            key={index}
            className="flex border-b-2 border-[#F4F5F7] gap-2 py-6 px-2"
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
            className="flex border-b-2 border-[#F4F5F7] gap-2 py-6 px-2"
            key={index}
          >
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                if (item.text === "Earn with Referal") {
                  handleCopy(
                    `/?referCode=${data?.referralCode}`,
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
          </div>
        );
      })}
      <LogoutModal />
    </section>
  );
};
interface props {
  data: UserProfile;
}
