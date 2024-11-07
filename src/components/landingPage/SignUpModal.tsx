"use client";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { inputLists } from "@/constant/auth";
import { useSignUp } from "./hook/useSignUp";
import Link from "next/link";
import { CustomModal } from "../CustomModal";
import React from "react";
export const SignUpModal = ({ btnText, className }: Props) => {
  const { modal, onConfirm, control, handleSubmit, onSubmit, isPending } =
    useSignUp();

  return (
    <CustomModal
      isOpen={modal.isOpen && modal.type === "signUp"}
      onOpenChange={(open) => onConfirm("signUp", open)}
      onConfirm={() => onConfirm("signIn")}
      title="Sign Up"
      subTitle="Already have an account?"
      content="Sign In"
      btnText={btnText || "Get Started"}
      className={className}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-3 py-2"
      >
        {inputLists.map((input) => (
          <CustomInput
            key={input.name}
            name={input.name}
            type={input.type}
            label={input.label}
            control={control}
            placeholder={input.placeholder}
          />
        ))}
        <small>
          By continuing you agree to our{" "}
          <Link
            href={"https://www.myvamsnet.com/terms-of-service"}
            target="_blank"
            className="text-primary text-sm font-normal"
          >
            Terms of Service
          </Link>
        </small>
        <Button
          type="submit"
          className={`w-full  h-[52px] text-base font-normal ${
            isPending ? "opacity-55 cursor-not-allowed" : ""
          }`}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Sign Up"}
        </Button>
      </form>
    </CustomModal>
  );
};

interface Props {
  btnText: React.ReactNode;
  className?: string;
}
