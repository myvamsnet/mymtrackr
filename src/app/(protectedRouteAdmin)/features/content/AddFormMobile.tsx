"use client";

import { CustomModal } from "@/components/CustomModal";
import React, { useState } from "react";
import { AddForm } from "./AddForm";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";

export const AddFormMobile = () => {
  const { onCancel, onConfirm, modal } = useModal();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="flex md:hidden justify-end items-center py-5">
      <Button
        onClick={() =>
          onConfirm({
            type: "default",
            isOpen: true,
          })
        }
      >
        Add New
      </Button>
      <Modal
        isOpen={modal.isOpen && modal.type === "default"}
        onClose={onCancel}
        title="Add New Video"
      >
        <AddForm />
      </Modal>
    </div>
  );
};
