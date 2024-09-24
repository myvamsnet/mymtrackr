import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { useSendOtp } from "../hook/useSendOtp";

const ConfirmOtp = () => {
  const { onCancel, sendOtp, isPending, modal } = useSendOtp();
  return (
    <Modal
      isOpen={modal?.isOpen && modal?.type === "reset-password"}
      onClose={onCancel}
      title="Reset Password"
      className="max-w-[452px]"
    >
      <div className="py-4 grid gap-4">
        <h4 className=" text-dark text-sm  opacity-80 text-center">
          An OTP code will be sent to your email.
        </h4>
        <div className="grid gap-3">
          <Button
            type="submit"
            className="text-white text-sm font-normal w-full"
            onClick={sendOtp}
            disabled={isPending}
          >
            {isPending ? "Sending OTP..." : "Proceed"}
          </Button>
          <Button type="submit" variant={"outline"} onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmOtp;
