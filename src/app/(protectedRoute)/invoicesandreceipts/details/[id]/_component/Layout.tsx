"use client";
import React from "react";

import { Dots } from "@/assets/icons/Dots";
import MoreModal from "./MoreModal";
import useModal from "@/hooks/useModal";
import { RecordHeader } from "@/app/(protectedRoute)/_components/common/records/RecordHeader";

export const Layout = ({ children }: Props) => {
  const { onConfirm } = useModal();
  return (
    <main className="container mx-auto md:max-w-[700px]">
      <RecordHeader
        title={`Details`}
        leftElement={
          <Dots
            className="cursor-pointer"
            onClick={() =>
              onConfirm({
                type: "more",
                isOpen: true,
              })
            }
          />
        }
        url="/invoicesandreceipts"
      />
      {children}
      <MoreModal />
    </main>
  );
};
interface Props {
  children: React.ReactNode;
}
