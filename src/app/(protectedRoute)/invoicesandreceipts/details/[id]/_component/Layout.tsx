"use client";
import React from "react";
import MoreModal from "./MoreModal";

export const Layout = ({ children }: Props) => {
  return (
    <main className="container mx-auto md:max-w-[700px]">
      {children}
      <MoreModal />
    </main>
  );
};
interface Props {
  children: React.ReactNode;
}
