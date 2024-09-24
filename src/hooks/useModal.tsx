import { useModalStore } from '@/zustand/modalStore';
import { useShallow } from 'zustand/react/shallow';

const useModal = () => {
  const { modal, onCancel, onConfirm } = useModalStore(
    useShallow((state) => ({
      modal: state.modal,
      onConfirm: state.onConfirm,
      onCancel: state.onCancel,
    }))
  );
  return {
    modal,
    onCancel,
    onConfirm,
  };
};

export default useModal;
