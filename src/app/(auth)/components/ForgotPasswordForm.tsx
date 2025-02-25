"use client";
import { ForgottenPasswordInputLists } from "@/constant/auth";
import { ForgotPasswordSchemaType } from "@/lib/Schema/authSchema";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import AuthLayout from "./AuthLayout";
import { useForgotPassword } from "@/app/(auth)/hook/useForgotPassword";
import { unprotectedRoute } from "@/constant/app";

export const ForgotPasswordForm = () => {
  const { control, mutate, isPending, handleSubmit } = useForgotPassword();
  const onSubmit = async (data: ForgotPasswordSchemaType) => {
    mutate(data);
  };

  return (
    <AuthLayout
      title="Forgot password?"
      subTitle="Enter the email  you registered with and wait for an OTP code to be sent."
      authContent="Already have an account?"
      content="Login"
      path={unprotectedRoute.Login}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4"
      >
        {ForgottenPasswordInputLists.map((input) => (
          <CustomInput
            key={input.name}
            name={input.name}
            type={input.type}
            label={input.label}
            control={control}
            placeholder={input.placeholder}
          />
        ))}
        <Button
          type="submit"
          className={`w-full  h-[52px] text-base font-normal ${
            isPending ? "opacity-55 cursor-not-allowed" : ""
          }`}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Submit"}
        </Button>
      </form>
    </AuthLayout>
  );
};
