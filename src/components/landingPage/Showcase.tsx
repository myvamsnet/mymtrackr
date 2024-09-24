"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import { SignUpModal } from "./SignUpModal";
import useModal from "@/hooks/useModal";

export const Showcase = () => {
  const { onConfirm } = useModal();
  return (
    <section className="md:py-10 py-6  overflow-y-hidden">
      <div className="md:w-[928px] mx-auto w-full">
        <Fade direction="top-left">
          <p className="md:text-[48px] font-normal text-center md:leading-[58px] text-[32px] leading-[40px]">
            Simplify Your Financial Management with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#246BFD] to-[#000610]">
              Mtrackr
            </span>
          </p>
        </Fade>
        <Fade cascade>
          <p className="md:text-xl text-base md:leading-[30px] text-[#7A7A84] text-center md:mt-6 mt-4 md:w-[689px] w-full mx-auto">
            Say goodbye to someone must be stealing my money, stress and the
            Hassles of Traditional Money Management. Mtrackr allows you to
            effortlessly manage money with confidence and ease.
          </p>
        </Fade>

        <div className="flex justify-center md:py-10 py-4">
          <Fade direction="up">
            <Button
              className="bg-primary py-4 px-6 md:w-[298px] rounded-3xl text-lg font-normal text md:h-[54px] w-[288px] h-[46px]"
              onClick={() => {
                onConfirm({
                  isOpen: true,
                  type: "signUp",
                });
              }}
            >
              Get Started
            </Button>
          </Fade>
        </div>
      </div>
      <SignUpModal />
    </section>
  );
};
