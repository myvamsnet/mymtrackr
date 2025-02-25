import { useCallback, useState } from "react";
import useModal from "./useModal";
import { ITableBody } from "@/types/newTable.types";
import { ModalType } from "@/zustand/modalStore";

export const useSelected = () => {
  const [selected, setSelected] = useState<ITableBody | null>(null);
  const { modal, onCancel, onConfirm } = useModal();
  const handleView = useCallback(
    (row: ITableBody, modalType = "default") => {
      setSelected(row);
      onConfirm({
        type: modalType as ModalType,
        isOpen: true as boolean,
      });
    },
    [setSelected, onConfirm]
  );
  return {
    selected,
    modal,
    handleView,
    onCancel,
  };
};
