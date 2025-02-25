"use client";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/CustomInput";
import AuthLayout from "./AuthLayout";
import useResetPassword from "../hook/useResetPassword";

const ChangePasswordForm = () => {
  const { control, handleSubmit, isPending, onSubmit } = useResetPassword();
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

