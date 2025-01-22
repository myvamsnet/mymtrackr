import Modal from "@/components/ui/Modal";
import useModal from "@/hooks/useModal";
import userStore from "@/zustand/userStore";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export const CheckBusinessAvailableModal = () => {
  const { add } = useParams() as {
    add: string;
  };
  const { onCancel } = useModal();
  const { user } = userStore();
  return (
    <Modal
      isOpen={user?.businessProfile ? false : true}
      onClose={onCancel}
      title=" Business Account"
    >
      <section className="p-4 text-center space-y-4">
        <h4 className="text-dark-300 font-medium text-sm">
          Setup your business account to continue using {add}
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
