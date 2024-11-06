/* eslint-disable react/no-unescaped-entities */
"use client";
import { signInputLists } from "@/constant/auth";
import { CustomInput } from "../CustomInput";
import { Button } from "../ui/button";
import { useSignIn } from "./hook/useSignIn";
import { CustomModal } from "../CustomModal";
export const SignInModal = ({ btnText, className, closeMenu }: Props) => {
  const {
    modal,
    onConfirm,
    control,
    handleSubmit,
    onSubmit,
    isPending,
    isValid,
  } = useSignIn();

  return (
    <CustomModal
      isOpen={modal.isOpen && modal.type === "signIn"}
      onOpenChange={(open) => {
        if (closeMenu) {
          closeMenu();
          onConfirm("signIn", open);
        }
        onConfirm("signIn", open);
      }}
      onConfirm={() => onConfirm("signUp")}
      title="Sign In"
      subTitle="Don't have an account?"
      content="Sign Up"
      btnText={btnText || "Login"}
      className={className}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4"
      >
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
    </CustomModal>
  );
};
interface Props {
  btnText?: string;
  className?: string;
  closeMenu?: () => void;
}
