"use client";
import { signInputLists } from "@/constant/auth";
import AuthWrapper from "../Auth";
import { CustomInput } from "../CustomInput";
import { Button } from "../ui/button";
import { useSignIn } from "./hook/useSignIn";

export const SignInModal = () => {
  const {
    modal,
    onConfirm,
    onCancel,
    control,
    handleSubmit,
    onSubmit,
    isPending,
    isValid,
  } = useSignIn();

  return (
    <AuthWrapper
      isOpen={modal.isOpen && modal.type === "signIn"}
      onCancel={onCancel}
      onConfirm={() => onConfirm("signUp")}
      title="Sign In"
      subTitle="Don't have an account?"
      content="Sign Up"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        {signInputLists.map((input) => (
          <CustomInput
            key={input.name}
            name={input.name}
            type={input.type}
            label={input.label}
            control={control}
            placeholder={input.placeholder}
          />
        ))}
        <div className="flex justify-end items-center text-primary text-xs py-2">
          <p onClick={() => onConfirm("forgotPassword")}>Forgot password?</p>
        </div>
        <Button
          type="submit"
          className={`w-full  h-[52px] text-base font-normal ${
            isPending ? "opacity-55 cursor-not-allowed" : ""
          }`}
          disabled={isPending || !isValid}
        >
          {isPending ? "Loading..." : "Sign In"}
        </Button>
      </form>
    </AuthWrapper>
  );
};
