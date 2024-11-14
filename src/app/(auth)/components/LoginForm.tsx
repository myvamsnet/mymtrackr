/* eslint-disable react/no-unescaped-entities */
"use client";
import { signInputLists } from "@/constant/auth";
import { CustomInput } from "../../../components/CustomInput";
import { Button } from "../../../components/ui/button";
import { useSignIn } from "../../../components/landingPage/hook/useSignIn";
export const LoginForm = () => {
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
    <>
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
          {isPending ? "Loading..." : "Login"}
        </Button>
      </form>
    </>
  );
};
interface Props {
  btnText?: string;
  className?: string;
  closeMenu?: () => void;
}
