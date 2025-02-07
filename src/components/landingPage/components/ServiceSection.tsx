"use client";
import useModal from "@/hooks/useModal";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export const ServiceSection = () => {
  const { onConfirm } = useModal();
  return (
    <div
      className="bg-overlay-3 bg-cover bg-center h-auto pt-[80px] px-5 md:px-[148px]"
      id="pricing"
    >
      <div className="wrapper h-auto grid gap-[40px] md:gap-[84px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[76px] items-center">
          <Image
            src={"/images/groupsphones.png"}
            alt="business-die"
            className="w-full  animate-bounce-less"
            width={610.35}
            height={602.23}
          />
          <div className="space-y-4">
            <div className="space-y-4">
              <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
                With Only{" "}
                <span className="line-through text-[#7A7A84]">#10,000</span>
                <span className="text-primary"> 3k </span> Enjoy all the
                benefits of Mtrackr!
              </h2>
              <p className="font-inter font-normal text-base md:text-xl text-dark-300">
                Don’t wait until business financial management stress hits hard.
                The risk of inaccurate financial records is more costly.
              </p>
            </div>
            <div className="text-center justify-center mx-auto py-2">
              <button
                className="font-inter font-medium text-sm md:text-base text-dark bg-[#F9D40E] w-full md:w-[298px] py-4 px-6 rounded-[24px] flex items-center justify-center gap-2 mt-2"
                onClick={() => {
                  onConfirm({
                    isOpen: true,
                    type: "signUp",
                  });
                }}
              >
                Get Started Free <MoveRight />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-overlay-4 bg-center bg-cover grid place-content-center h-[189px] rounded-[32px] ">
          <p className="font-inter font-semibold text-2xl/8 md:text-[44px] md:leading-[65px] text-off-white-400 text-center w-[224px] md:w-[986px] lg:w-[986px]">
            Get Peace of Mind and Financial Clarity Today!
          </p>
        </div>
      </div>
    </div>
  );
};
