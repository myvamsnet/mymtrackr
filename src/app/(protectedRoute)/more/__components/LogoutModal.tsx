"use client";

import Modal from "@/components/ui/Modal";
import { useLogout } from "@/hooks/useLogout";
import useModal from "@/hooks/useModal";

export function LogoutModal() {
  const { handleLogout, isPending } = useLogout();
  const { modal, onCancel } = useModal();
  return (
    <Modal
      className=""
      isOpen={modal.isOpen && modal.type === "logout"}
      onClose={onCancel}
      title="Logout"
    >
      <section className="p-2">
        <h4 className="text-danger-500">Are you sure you want to logout?</h4>
        <div className="flex justify-end items-center py-2">
          <button
            className="font-medium text-base text-primary"
            disabled={isPending}
            onClick={handleLogout}
          >
            {isPending ? "Loading..." : "Confirm"}
          </button>
        </div>
      </section>
    </Modal>
  );
}
