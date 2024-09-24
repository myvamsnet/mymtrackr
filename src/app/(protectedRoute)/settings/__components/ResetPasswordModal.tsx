"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { Lock } from "lucide-react";
import { useSendOtp } from "../hook/useSendOtp";
import useModal from "@/hooks/useModal";
import ConfirmOtp from "./ConfirmOtp";
import OtpModal from "./OtpModal";
import ChangePassword from "./ChangePassword";
const ResetPasswordModal = () => {
  const { onConfirm } = useModal();
  return (
    <div className="border-b w-full   p-4">
      <div
        className="flex items-center gap-2"
        onClick={() => {
          onConfirm({
            type: "reset-password",
            isOpen: true,
          });
        }}
      >
        <Lock />
        <p className="flex cursor-pointer text-sm font-normal text-dark">
          Reset Password
        </p>
      </div>
      <ConfirmOtp />
      <OtpModal />
      <ChangePassword />
    </div>
  );
};

export default ResetPasswordModal;
