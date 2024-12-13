"use client";
import { useModalStore } from "@/zustand/modalStore";

const useModal = () => {
  const { modal, onCancel, onConfirm } = useModalStore();
  return {
    modal,
    onCancel,
    onConfirm,
  };
};

export default useModal;
