"use client";
import { Icons } from "@/assets/icons";
import CustomAvatar from "@/components/ui/Avatar/index";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { UserProfile } from "@/types/auth";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { use, useEffect } from "react";
import toast from "react-hot-toast";

export const Header = ({ data }: headerProps) => {
  const searchParam = useSearchParams();
  const login = searchParam.get("login");
  const signup = searchParam.get("signup");
  const { updateQueryParams } = useUpdateQuery();
  useEffect(() => {
    if (login) {
      toast.success("Login successful", {
        id: "login",
      });
      updateQueryParams({ login: "", signup: "" });
    }
    if (signup) {
      toast.success("Signup successful", {
        id: "signup",
      });
      updateQueryParams({ login: "", signup: "" });
    }
  }, [login, signup, updateQueryParams]);
  return (
    <section className="lg:py-4 py-4 lg:-ml-0 -ml-4 px-3 flex justify-between items-center lg:sticky fixed w-full top-0 z-30 bg-[#f1f5fd]">
      <div className="flex items-center gap-1">
        <Link href={"/settings/profile"} className=" cursor-pointer">
          <CustomAvatar
            name={data?.fullName || "M Tracker"}
            imgUrl={data?.imageUrl}
            className="w-8 h-8 text-white font-semibold"
          />
        </Link>
        <span className="font-semibold text-base/4 font-inter">
          {data?.fullName}
        </span>
      </div>
      <div className="flex items-center gap-5">
        <Link href="/analytics">
          <Icons.AnalyticsIcon />
        </Link>
        <Icons.NotificationIcon />
      </div>
    </section>
  );
};
interface headerProps {
  data: UserProfile;
}
