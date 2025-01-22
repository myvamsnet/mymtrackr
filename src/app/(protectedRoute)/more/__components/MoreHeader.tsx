import { SubscriptionType } from "@/app/actions/getSubscription";
import { userprofile } from "@/app/actions/getUser";
import { PenBook } from "@/assets/icons/PenBook";
import CustomAvatar from "@/components/ui/Avatar/index";
import Link from "next/link";
import React from "react";

export const MoreHeader = ({ data, subscription }: props) => {
  return (
    <section>
      <div className="top-[44px] py-5 px-3 bg-off-white">
        <p className="font-semibold text-base/5 font-inter text-dark">More</p>
      </div>
      <section className="flex items-center justify-between bg-primary border-b-2 rounded-xl top-[87px] py-3 px-4">
        <div className="flex gap-2 items-center">
          <CustomAvatar
            name={data?.fullName || "MT"}
            imgUrl={data?.imageUrl}
            className="w-10 h-10 text-white font-semibold"
          />

          <div className="gap-2">
            <p className="font-semibold font-inter text-base text-[#FCFDFE]">
              {data?.fullName}
            </p>
            <p className="font-medium text-xs/5 text-[#D6D7DB] font-inter capitalize">
              {subscription?.status === "trial" ? "Free" : subscription?.status}
            </p>
          </div>
        </div>
        <Link href={"/settings/profile"} className=" cursor-pointer">
          <PenBook />
        </Link>
      </section>
    </section>
  );
};
interface props {
  data: userprofile;
  subscription: SubscriptionType;
}
