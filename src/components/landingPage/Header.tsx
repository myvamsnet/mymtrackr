"use client";
import Image from "next/image";
import { SignInModal } from "./SignInModal";
import useModal from "@/hooks/useModal";
import { ForgotPasswordModal } from "./ForgotPasswordModal";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ChangePasswordModal from "./ChangePasswordModal";

export const Header = () => {
  const { onConfirm } = useModal();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      onConfirm({
        isOpen: true,
        type: "setNewPassword",
      });
    }
  }, [code, onConfirm]);
  return (
    <>
      <nav className="flex justify-between items-center py-6 sticky top-0 bg-off-white overflow-hidden">
        <Image src={"/images/logo.svg"} alt="logo" width={106} height={30} />
        <ul>
          <li className="border border-primary md:py-3 px-6 py-2  rounded-xl h-[46px] text-primary">
            <button
              onClick={() => {
                onConfirm({
                  isOpen: true,
                  type: "signIn",
                });
              }}
            >
              Sign In
            </button>
          </li>
        </ul>
      </nav>
      <SignInModal />
      <ForgotPasswordModal />
      <ChangePasswordModal />
    </>
  );
};
