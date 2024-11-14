"use client";
import { signInputLists } from "@/constant/auth";
import { CustomInput } from "../../../components/CustomInput";
import { Button } from "../../../components/ui/button";
import { useSignIn } from "../../../components/landingPage/hook/useSignIn";
import Link from "next/link";
import { unprotectedRoute } from "@/constant/app";
export const LoginForm = () => {
  const { control, handleSubmit, onSubmit, isPending } = useSignIn();

  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 w-full"
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
          <Link href={unprotectedRoute.FORGOTPASSWORD}>Forgot password?</Link>
        </div>
        <Button
          type="submit"
          className={`w-full  h-[52px] text-base font-normal ${
            isPending ? "opacity-55 cursor-not-allowed" : ""
          }`}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Login"}
        </Button>
      </form>
    </section>
  );
};
interface Props {
  btnText?: string;
  className?: string;
  closeMenu?: () => void;
}
