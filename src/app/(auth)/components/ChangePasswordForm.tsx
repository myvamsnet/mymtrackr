"use client";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resetPassword, ResetPasswordType } from "@/lib/Schema/resetPassword";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import AuthLayout from "./AuthLayout";
import axiosInstance from "@/lib/axios";

const ChangePasswordForm = () => {
  const { control, handleSubmit } = useForm<ResetPasswordType>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(resetPassword),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: ResetPasswordType) => {
      const { data } = await axiosInstance.post(
        "/auth/change-password",
        payload
      );
      return data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message);
        window.location.href = "/home";
      }
    },
    onError(error) {
      if (
        error?.message !== "" &&
        error?.message == null &&
        error.message !== undefined
      ) {
        return toast.error(error.message);
      }
    },
  });
  const onSubmit = (data: ResetPasswordType) => {
    mutate(data);
  };

  return (
    <AuthLayout
      title="Reset Password"
      subTitle=""
      authContent=""
      path=""
      content=""
    >
      <div className="grid gap-4">
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
              {isPending ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ChangePasswordForm;

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
