"use client";
import React from "react";
import MoreModal from "./MoreModal";
import useModal from "@/hooks/useModal";

export const Layout = ({ children }: Props) => {
  const { onConfirm } = useModal();
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
