"use client";
import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <main className="flex  min-h-screen overflow-auto bg-off-white-500 ">
      <div className="h-screen bg-off-white-300 w-[274px] fixed left-0 top-0 md:flex hidden">
        <Sidebar />
      </div>
      <section className="flex-1 md:ml-64">
        <Header />
        <section className="md:py-12 md:px-8 p-4">{children}</section>
      </section>
    </main>
  );
};

export default AdminLayout;
interface AdminLayoutProps {
  children: React.ReactNode;
}
