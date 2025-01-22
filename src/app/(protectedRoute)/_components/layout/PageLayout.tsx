"use client"
import React from "react";

const PageLayout = ({ children, className }: Props) => {
  return (
    <main
      className={`container mx-auto md:max-w-[700px]  overflow-y-auto overflow-x-hidden h-screen relative space-y-4 bg-off-white-500 p-3 ${className}`}
    >
      {children}
    </main>
  );
};

export default PageLayout;
interface Props {
  children: React.ReactNode;
  className?: string;
}
