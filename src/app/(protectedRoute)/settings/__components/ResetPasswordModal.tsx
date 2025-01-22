"use client";
import { Lock } from "lucide-react";
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
        <div className="h-8 w-8 bg-off-white rounded-full flex justify-center items-center">
          <Lock
            height={"16"}
            width={"16"}
          />
        </div>
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
