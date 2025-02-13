"use client";
import { Icons } from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileTab = ({ toggle, isOpen }: props) => {
  const routes = [
    {
      name: "Home",
      path: "/home",
      icon: Icons.HomeIcon,
    },
    {
      name: "Records",
      path: "/records",
      icon: Icons.RecordIcon,
    },
    {
      name: "Add Record",
      path: "#",
      icon: Icons.PlusIcon,
      type: "button",
    },
    {
      name: "Help",
      path: "/help",
      icon: Icons.HelpIcon,
    },
    {
      name: "More",
      path: "/more",
      icon: Icons.MoreIcon,
    },
  ];

  const active = usePathname();

  return (
    <div className="fixed bottom-0  left-0  z-40 bg-off-white-300  w-full  lg:hidden block ">
      <ul className="grid grid-cols-5 gap-4 p-3 ">
        {routes?.map((route, i) => {
          return route.type !== "button" ? (
            <li key={`${route.name}-${i}`}>
              <Link
                href={route.path}
                className={`flex justify-center items-center flex-col gap-1 p-3 ${
                  active === route?.path
                    ? "text-primary font-semibold text-sm"
                    : "text-dark-100 text-xs font-medium"
                }`}
              >
                <route.icon
                  color={route?.path === active ? "#246BFD" : "#7A7A84"}
                />
                <span className="  ">{route.name}</span>
              </Link>
            </li>
          ) : (
            <li
              className="flex justify-center items-center"
              key={`${route.name}-${i}`}
            >
              <button
                onClick={toggle}
                className="bg-primary shadow-lg h-[42px] w-[42px] rounded-full  flex justify-center items-center text-white btn-drop-shadow"
              >
                {isOpen ? <Icons.MinusIcon /> : <Icons.PlusIcon />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
interface props {
  toggle: () => void;
  isOpen: boolean;
}
