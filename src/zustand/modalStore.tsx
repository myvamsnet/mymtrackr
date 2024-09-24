import { create } from "zustand";
const initialState: ModalStoreStete = {
  isOpen: false,
  type: "signUp",
};
export const useModalStore = create<ModalStore>((set) => ({
  modal: initialState,
  onConfirm: (modal: ModalStoreStete) => {
    set({
      modal: {
        ...modal,
        isOpen: modal.isOpen,
        type: modal.type,
      },
    });
  },
  onCancel: () => {
    set({
      modal: initialState,
    });
  },
}));

interface ModalStore {
  modal: ModalStoreStete;
  onConfirm: (modal: ModalStoreStete) => void;
  onCancel: () => void;
}
export interface ModalStoreStete {
  isOpen: boolean;
  type:
    | "signUp"
    | "signIn"
    | "forgotPassword"
    | "editRecord"
    | "reset-password"
    | "conform-otp"
    | "change-password"
    | "setNewPassword"
    | "confirmEmail";
}
