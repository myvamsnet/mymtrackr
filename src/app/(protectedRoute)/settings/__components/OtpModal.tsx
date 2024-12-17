import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/Modal";
import { useSendOtp } from "../hook/useSendOtp";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useModifyResource } from "@/hooks/useModifyResource";
import toast from "react-hot-toast";
const OtpModal = () => {
  const { onCancel, modal, onConfirm } = useSendOtp();
  const [value, setValue] = useState("");
  const confirmOtpMutation = useModifyResource<any, Payload>({
    endpoint: "/send/confirm-otp",
    method: "POST",
  });

  const handleConfirmOtp = async () => {
    const res = await confirmOtpMutation.mutateAsync({
      otp: Number(value),
    });
    if (res.status === "success") {
      onConfirm({
        type: "change-password",
        isOpen: true,
      });
      setValue("");
      toast.success("OTP Confirm");
    }
  };
  return (
    <Modal
      isOpen={modal?.isOpen && modal?.type === "conform-otp"}
      onClose={onCancel}
      title="Reset Password"
      className="max-w-[452px]"
    >
      <div className="py-4 grid gap-4">
        <h4 className="text-2xl text-primary font-semibold text-center">
          Enter OTP code
        </h4>
        <p className="text-center text-dark text-sm  opacity-80">
          Your OTP code has been sent to your email.
        </p>
        <div className="space-y-2 flex justify-center items-center">
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup className="w-full grid gap-3 grid-cols-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <InputOTPSlot
                  index={index}
                  key={index}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="grid gap-2 mt-2 pt-3 px-3">
          <div className="flex justify-end items-center text-primary">
            <small>00:30</small>
          </div>
          <Button
            type="submit"
            className="text-white text-sm font-normal w-full py-2 px-4 h-[43px]"
            onClick={handleConfirmOtp}
            disabled={confirmOtpMutation.isPending}
          >
            {confirmOtpMutation.isPending ? "Loading..." : "Continue"}
          </Button>
        </div>
        <p className="text-center text-sm text-dark/70">
          Didn’t receive the code?{" "}
          <button className="text-primary font-medium">Resend OTP</button>
        </p>
      </div>
    </Modal>
  );
};

export default OtpModal;

interface Payload {
  otp: number;
}
