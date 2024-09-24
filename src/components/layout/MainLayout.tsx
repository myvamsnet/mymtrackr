"use client";
import React, { FC } from "react";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="w-full mx-auto  md:max-w-[80%] font-inter lg:p-0 px-3 !overflow-hidden h-screen">
      {children}
    </main>
  );
};

export default MainLayout;
interface MainLayoutProps {
  children: React.ReactNode;
}
