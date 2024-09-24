"use client";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { AddRecords } from "../common/records/AddRecords";
import { MobileTab } from "./MobileTab";
import useIdleTimeout from "@/hooks/useIdleTimeout";

const ProtectedLayout = ({ children }: MainLayoutProps) => {
  useIdleTimeout();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevSate) => !prevSate);
  };
  return (
    <section className="container mx-auto  md:max-w-[80%] font-inter lg:p-0 px-3    my-3 h-screen md:flex gap-6 md:flex-row flex-col relative">
      <SideBar />
      <section className="flex-1 w-full overflow-y-auto h-[90vh]">
        {children}

        {
          // AddRecords component is added here
          isOpen && <AddRecords />
        }
      </section>
      <MobileTab toggle={toggle} isOpen={isOpen} />
    </section>
  );
};

export default ProtectedLayout;
interface MainLayoutProps {
  children: React.ReactNode;
}
