"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { adminRoutes } from "@/constant/admin/routes";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarMobile = () => {
  const active = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-off-white-300">
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
      </SheetContent>
    </Sheet>
  );
};
