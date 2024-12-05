"use client";
import React from "react";
import { RecordHeader } from "../../../_components/common/records/RecordHeader";
import { Dots } from "@/assets/icons/Dots";
import MoreModal from "./MoreModal";
import useModal from "@/hooks/useModal";

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
      />
      {children}
      <MoreModal />
    </main>
  );
};
interface Props {
  children: React.ReactNode;
}
