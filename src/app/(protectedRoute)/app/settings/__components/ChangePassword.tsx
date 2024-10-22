import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { useState } from "react";
import { useModifyResource } from "@/hooks/useModifyResource";
import { CustomInput } from "@/components/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resetPassword, ResetPasswordType } from "@/lib/Schema/resetPassword";
import useModal from "@/hooks/useModal";
import toast from "react-hot-toast";
const ChangePassword = () => {
  const { onCancel, modal } = useModal();
  const { mutateAsync, isPending } = useModifyResource<any, Payload>({
    endpoint: "/auth/change-password",
    method: "POST",
  });

  const { control, handleSubmit, reset } = useForm<ResetPasswordType>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(resetPassword),
  });

  const onSubmit = async (data: ResetPasswordType) => {
    const res = await mutateAsync(data);
    if (res?.status === "success") {
      toast.success(res?.message);
      onCancel();
      reset();
    }
  };
  return (
    <Modal
      isOpen={modal?.isOpen && modal?.type === "change-password"}
      onClose={onCancel}
      title="Reset Password"
      className="max-w-[452px]"
    >
      <div className="py-4 grid gap-4">
        <h4 className="text-2xl text-primary font-semibold text-center">
          Set New Password
        </h4>
        <form
          action=""
          className=" bg-off-white-300 p-4 rounded-xl my-3 grid gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {inputFields.map((field, index) => (
            <CustomInput
              key={index}
              name={field.name}
              type={field.type}
              label={field.label}
              control={control}
              placeholder={field.placeholder}
            />
          ))}

          <div className="flex md:justify-end">
            <Button
              className="w-full"
              disabled={isPending ? true : false}
              type="submit"
            >
              {isPending ? "Loading..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ChangePassword;

const inputFields: InputProps[] = [
  {
    name: "newPassword",
    type: "password",
    label: "New password",
    placeholder: "Enter new password",
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm password",
    placeholder: "Confirm password",
  },
];
interface InputProps {
  name: string;
  type: "password";
  label: string;
  placeholder: string;
}

interface Payload {
  newPassword: string;
  confirmPassword: string;
}
