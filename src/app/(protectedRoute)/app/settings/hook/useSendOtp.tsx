import useModal from "@/hooks/useModal";
import { useRedirect } from "@/hooks/useRedirect";
import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useSendOtp = () => {
  const { onCancel, modal, onConfirm } = useModal();
  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.post("/send");
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data?.message);
        onConfirm({
          type: "conform-otp",
          isOpen: true,
        });
      }
    },
  });
  const sendOtp = async () => {
    mutate();
  };

  return {
    sendOtp,
    modal,
    onCancel,
    onConfirm,
    isPending,
  };
};
