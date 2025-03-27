"use client";

import { useState } from "react";
import { SideBar } from "./SideBar";
import { AddRecords } from "../common/records/AddRecords";
import { MobileTab } from "./MobileTab";
import useIdleTimeout from "@/hooks/useIdleTimeout";
import RegisterConfirmation from "./RegisterConfirmation";
import { User } from "@/types/auth";
import dynamic from "next/dynamic";
import useInactivityTimer from "@/hooks/useInactivityTimer";

const SubscriptionExpiredModal = dynamic(() =>
  import("../SubscriptionExpiredModal").then((mod) => mod.default)
);

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  user?: User;
}

const ProtectedLayout = ({
  children,
  className = "",
  user,
}: MainLayoutProps) => {
  useInactivityTimer(45 * 60 * 1000);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <section className="container mx-auto xl:max-w-[80%] md:max-w-[100%] font-inter lg:p-0 px-3 md:flex gap-6 md:flex-row flex-col relative">
      <SideBar />
      <section className={`flex-1 w-full ${className}`}>
        {children}
        <AddRecords isOpen={isOpen} toggle={setIsOpen} />
      </section>
      <MobileTab toggle={toggle} isOpen={isOpen} />
      {user?.subscriptions?.status && (
        <SubscriptionExpiredModal status={user.subscriptions.status} />
      )}
      <RegisterConfirmation />
    </section>
  );
};

export default ProtectedLayout;
