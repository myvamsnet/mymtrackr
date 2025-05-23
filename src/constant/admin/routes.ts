import { ContentIcon } from "@/assets/icons/ContentIcon";
import { DashboardIcon } from "@/assets/icons/DashboardIcon";
import { UsersIcon } from "@/assets/icons/UsersIcon";
import { Bell } from "lucide-react";

export const adminRoutes = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    id: 1,
    icon: DashboardIcon,
  },
  {
    name: "Users",
    path: "/admin/users?status=all",
    id: 2,
    icon: UsersIcon,
  },
  {
    name: "Content",
    path: "/admin/content",
    id: 3,
    icon: ContentIcon,
  },
  {
    name: "Notifications",
    path: "/admin/notifications",
    id: 4,
    icon: Bell,
  },
];
