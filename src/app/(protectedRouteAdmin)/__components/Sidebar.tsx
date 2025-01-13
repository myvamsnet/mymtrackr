"use client";
import { adminRoutes } from "@/constant/admin/routes";
import { useLogout } from "@/hooks/useLogout";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar = () => {
  const { handleLogout, isPending } = useLogout();
  const active = usePathname();

  return (
    <aside className=" p-4 h-[70%] justify-between flex-col  flex">
      <section className=" space-y-8">
        <Link href={"/admin/dashboard"}>
          <Image
            src="/images/logo_black.svg"
            alt="Logo Admin"
            width={118.22}
            height={33.56}
          />
        </Link>

        <menu className="space-y-4">
          {adminRoutes?.map((route) => (
            <li key={route.id}>
              <Link
                href={route.path}
                className={`flex items-center gap-3 py-4 px-8 font-semibold text-base  ${
                  active === route.path
                    ? "text-primary bg-off-white-500 rounded-lg border-l-2 border-primary"
                    : "text-dark-200"
                }`}
              >
                <route.icon
                  color={active === route.path ? "#246BFD" : "#808387"}
                />
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
        </menu>
      </section>
      <section className="py-4 px-8">
        <button
          className="text-dark-100 font-semibold text-base flex justify-center items-center gap-3"
          disabled={isPending}
          onClick={handleLogout}
        >
          <LogOut width={18} height={18} />
          <span>Log Out</span>
        </button>
      </section>
    </aside>
  );
};
