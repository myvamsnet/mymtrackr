"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SidebarMobile } from "./SidebarMobile";
import { UserProfile } from "@/app/actions/getAdminUser";

export const Header = ({ user }: Props) => {
  return (
    <header className="bg-off-white-300  py-3 px-6 flex xl:justify-end justify-between items-center gap-3 h-[68px] sticky top-0 z-50">
      <Link href={"/admin/dashboard"} className="xl:hidden block">
        <Image
          src="/images/logo_black.svg"
          alt="Logo Admin"
          width={100}
          height={30}
        />
      </Link>
      <div className="flex items-center gap-3">
        <Image
          src={"/images/user-profile.svg"}
          alt="Feranmi Prema"
          width={28}
          height={28}
          className="h-7 w-7"
        />
        <div className="xl:hidden block">
          <SidebarMobile />
        </div>
        <span className="xl:block hidden">{user?.fullName}</span>
      </div>
    </header>
  );
};
interface Props {
  user: UserProfile;
}
