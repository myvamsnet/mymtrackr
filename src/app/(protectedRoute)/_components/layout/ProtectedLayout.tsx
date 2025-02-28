"use client";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { AddRecords } from "../common/records/AddRecords";
import { MobileTab } from "./MobileTab";
import useIdleTimeout from "@/hooks/useIdleTimeout";

import { SubscriptionExpiredModal } from "../SubscriptionExpiredModal";
import RegisterConfirmation from "./RegisterConfirmation";

const ProtectedLayout = ({ children, className }: MainLayoutProps) => {
  useIdleTimeout();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevSate) => !prevSate);
  };
  return (
    <section className="container mx-auto xl:max-w-[80%]  md:max-w-[100%] font-inter lg:p-0 px-3    md:flex gap-6 md:flex-row flex-col relative">
      <SideBar />
      <section className={`flex-1 w-full  ${className}`}>
        {children}

        <AddRecords isOpen={isOpen} toggle={(open) => setIsOpen(open)} />
      </section>
      <MobileTab toggle={toggle} isOpen={isOpen} />
      <SubscriptionExpiredModal />
      <RegisterConfirmation />
    </section>
  );
};

export default ProtectedLayout;
interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}
