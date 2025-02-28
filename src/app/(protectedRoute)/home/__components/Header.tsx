"use client";

import { Icons } from "@/assets/icons";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { checkSubscription } from "@/lib/helper/checkSubscription";
import { User } from "@/types/auth";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { showSubscriptionExpirationToast } from "../../_components/showSubscriptionExpirationToast";
import CustomAvatar from "@/components/ui/Avatar/index";

interface HeaderProps {
  user: User;
}

export const Header = ({ user }: HeaderProps) => {
  const daysRemaining = checkSubscription(
    user?.subscriptions?.expired_at
  ) as number;
  const searchParams = useSearchParams();
  const { updateQueryParams } = useUpdateQuery();

  useEffect(() => {
    if (searchParams.get("login") === "success") {
      if (daysRemaining >= 5) {
        toast.success("Login successful", { id: "login" });
      } else if (daysRemaining >= 1) {
        showSubscriptionExpirationToast(daysRemaining);
      }
      updateQueryParams({ login: "", signup: "" });
    }
  }, [searchParams, updateQueryParams, daysRemaining]);

  return (
    <section className="py-4 bg-[#F4F8FF] flex justify-between items-center w-full z-30 sticky top-0 h-[58px]">
      <Link
        href="/settings/profile"
        className="flex items-center gap-2 cursor-pointer"
      >
        <CustomAvatar
          name={user?.fullName || "M Tracker"}
          imgUrl={user?.imageUrl as string}
          className="w-8 h-8 text-white font-semibold"
        />
        <span className="font-semibold text-base/4 font-inter">
          {user?.fullName}
        </span>
      </Link>

      <div className="flex items-center gap-5">
        <Link href="/analytics">
          <Icons.AnalyticsIcon />
        </Link>
        <Link href="/notifications">
          <Icons.NotificationIcon />
        </Link>
      </div>
    </section>
  );
};
