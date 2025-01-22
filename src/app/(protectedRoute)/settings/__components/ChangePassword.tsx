"use client";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resetPassword, ResetPasswordType } from "@/lib/Schema/resetPassword";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { handleError } from "@/lib/helper/handleError";
const ChangePassword = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: ResetPasswordType) => {
      const res = await axiosInstance.post("/auth/change-password", payload);
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: handleError,
  });
  const { control, handleSubmit, reset } = useForm<ResetPasswordType>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
      currentPassword: "",
    },
    resolver: zodResolver(resetPassword),
  });

  const onSubmit = async (data: ResetPasswordType) => {
    mutate(data);
  };
  return (
    <section>
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
    </section>
  );
};

export default ChangePassword;

const inputFields: InputProps[] = [
  {
    name: "currentPassword",
    type: "password",
    label: "Current password",
    placeholder: "Enter current password",
  },
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
