import { DesktopAddRecord } from "./DesktopAddRecord";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarRoutes } from "@/constant/navroutes";

export const SideBar = () => {
  const active = usePathname();
  return (
    <aside className="w-[220px] py-6 bg-off-white-300 h-full px-4 lg:block hidden rounded-lg space-y-10 sticky top-0 ">
      <Link
        href="/app/home"
        className="h-8"
      >
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={106}
          height={32}
          priority
        />
      </Link>

      <ul className="grid gap-3">
        {sidebarRoutes.map((route, i) => {
          return route.type === "button" ? (
            <div key={`${route.name}-${i}`}>
              <DesktopAddRecord />
            </div>
          ) : (
            <li key={`${route.name}-${i}`}>
              <Link
                href={route.path}
                className={`flex items-center gap-2 py-3 ${
                  active === route?.path ? "text-primary font-semibold" : ""
                }`}
              >
                <route.icon
                  color={active === route.path ? "#246BFD" : "#7A7A84"}
                />
                <span>{route.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
