"use client";
import { ForgottenPasswordInputLists } from "@/constant/auth";
import AuthWrapper from "../Auth";
import { CustomInput } from "../CustomInput";
import { Button } from "../ui/button";
import { useForgotPassword } from "./hook/useForgotPassword";
import { ForgotPasswordSchemaType } from "@/lib/Schema/authSchema";

export const ResetPasswordModa = () => {
  const {
    modal,
    onConfirm,
    onCancel,
    control,
    mutate,
    isPending,
    handleSubmit,
  } = useForgotPassword();
  const onSubmit = async (data: ForgotPasswordSchemaType) => {
    mutate(data);
  };

  return (
    <AuthWrapper
      isOpen={modal.isOpen && modal.type === "forgotPassword"}
      onCancel={onCancel}
      onConfirm={() => {
        onConfirm({
          type: "signIn",
          isOpen: true,
        });
      }}
      title="Forgot password?"
      subTitle="Enter the email  you registered with and wait for an OTP code to be sent."
      content=""
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
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
    </AuthWrapper>
  );
};
