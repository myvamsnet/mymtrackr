import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { CustomInput } from "@/components/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resetPassword, ResetPasswordType } from "@/lib/Schema/resetPassword";
import useModal from "@/hooks/useModal";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { createClient } from "@/lib/supabse/client";
import { useRedirect } from "@/hooks/useRedirect";
const ChangePasswordModal = () => {
  const { onCancel, modal } = useModal();
  const { control, handleSubmit, reset } = useForm<ResetPasswordType>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(resetPassword),
  });
  const redirect = useRedirect();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ResetPasswordType) => {
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({
        password: data.newPassword,
      });

      if (error) {
        return {
          status: "error",
          message: error.message,
        };
      }
      return {
        status: "success",
        message: "Password changed successfully",
      };
    },
    onSuccess: (data) => {
      if (data?.status === "error" && data?.message) {
        return toast.error(data?.message);
      }
      if (data?.status === "success") {
        toast.success(data?.message);
        onCancel();
        reset();
        return redirect("/home");
      }
    },
  });
  const onSubmit = (data: ResetPasswordType) => {
    mutate(data);
  };
  return (
    <Modal
      isOpen={modal?.isOpen && modal?.type === "setNewPassword"}
      onClose={onCancel}
      title="Reset Password"
      className="max-w-[452px]"
    >
      <div className="py-4 grid gap-4">
        <h4 className="text-2xl text-primary font-semibold text-center">
          Set New Password
        </h4>
        <form
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

export default ChangePasswordModal;

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
