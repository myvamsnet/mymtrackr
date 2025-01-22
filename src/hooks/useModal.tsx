"use client";
import { useModalStore } from "@/zustand/modalStore";
import { useShallow } from "zustand/react/shallow";
const useModal = () => {
  const { modal, onCancel, onConfirm } = useModalStore(
    useShallow((state) => ({
      isOpen: state.modal.isOpen,
      type: state.modal.type,
      onConfirm: state.onConfirm,
      onCancel: state.onCancel,
      modal: state.modal,
    }))
  );
  return {
    modal,
    onCancel,
    onConfirm,
  };
};

export default useModal;
