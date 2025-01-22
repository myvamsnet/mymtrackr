"use client";
import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { userprofile } from "@/app/actions/getAdminUser";

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <main className="flex  min-h-screen overflow-auto bg-off-white-500 relative">
      <div className="h-screen bg-off-white-300 w-[200px] fixed left-0 top-0 md:flex hidden">
        <Sidebar />
      </div>
      <section className="flex-1 md:ml-[200px]">
        <div className="sticky top-0 z-50 ">
          <Header />
        </div>
        <section className="md:py-12 md:px-8 p-4">{children}</section>
      </section>
    </main>
  );
};

export default AdminLayout;
interface AdminLayoutProps {
  children: React.ReactNode;
}
