"use client";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { inputLists } from "@/constant/auth";
import { useSignUp } from "../hook/useSignUp";
import Link from "next/link";
import React from "react";
import { CountdownModal } from "@/components/CountdownModal";
export const RegisterForm = () => {
  const { control, handleSubmit, onSubmit, isPending, isOpen, toggle, live } =
    useSignUp();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-2">
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
        <small className="md:mt-0 mt-4">
          By continuing you agree to our{" "}
          <Link
            href={"https://www.myvamsnet.com/terms-of-service"}
            target="_blank"
            className="text-primary text-sm font-normal"
          >
            Terms of Service
          </Link>
        </small>
        {live === "not-live" ? (
          <CountdownModal
            onComplete={() => console.log("It's February 24th!")}
            isOpen={isOpen}
            toggle={toggle}
          />
        ) : (
          <Button
            type="submit"
            className={`w-full  h-[52px] text-base font-normal ${
              isPending ? "opacity-55 cursor-not-allowed" : ""
            }`}
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Sign Up"}
          </Button>
        )}
      </form>
    </>
  );
};

interface Props {
  btnText: React.ReactNode;
  className?: string;
}
