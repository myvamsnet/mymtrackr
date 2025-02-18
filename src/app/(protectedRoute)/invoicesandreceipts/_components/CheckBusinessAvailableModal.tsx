"use client";
import Modal from "@/components/ui/Modal";
import { BusinessData } from "@/types/business";
import Link from "next/link";
import React from "react";

export const CheckBusinessAvailableModal = ({
  businessProfile,
  type,
}: Props) => {
  return (
    <Modal
      isOpen={businessProfile?.id ? false : true}
      onClose={() => {}}
      title=" Business Account"
    >
      <section className="p-4 text-center space-y-4">
        <h4 className="text-dark-300 font-medium text-sm">
          Setup your business account to continue using {type}
        </h4>
        <div>
          <Link
            href={"/settings/business"}
            className="bg-primary py-2 px-4 text-white rounded-md"
          >
            Business Account
          </Link>
        </div>
      </section>
    </Modal>
  );
};
interface Props {
  businessProfile: BusinessData;
  type: string;
}
