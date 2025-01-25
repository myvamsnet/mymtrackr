"use client";
import { Icons } from "@/assets/icons";
import CustomAvatar from "@/components/ui/Avatar/index";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { User } from "@/types/auth";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const Header = ({ user }: headerProps) => {
  const searchParam = useSearchParams();
  const login = searchParam.get("login");
  const signup = searchParam.get("signup");

  const { updateQueryParams } = useUpdateQuery();
  useEffect(() => {
    if (login === "success" || signup === "success") {
      toast.success(`${login ? "Login" : "Register"} successful`, {
        id: login || signup || "",
      });
      updateQueryParams({ login: "", signup: "" });
    }
  }, [login, signup, updateQueryParams]);

  return (
    <section className=" py-4 bg-[#F4F8FF]   flex justify-between items-center  w-full  z-30 sticky top-0 h-[58px]">
      <div className="flex items-center gap-3">
        <Link href={"/settings/profile"} className=" cursor-pointer">
          <CustomAvatar
            name={user?.fullName || "M Tracker"}
            imgUrl={user?.imageUrl as string}
            className="w-8 h-8 text-white font-semibold"
          />
        </Link>
        <span className="font-semibold text-base/4 font-inter">
          {user?.fullName}
        </span>
      </div>
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
interface headerProps {
  user: User;
}
