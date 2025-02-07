"use client";

import { unprotectedRoute } from "@/constant/app";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export const ShowCaseTitle = () => {
  return (
    <div className="grid md:gap-[52px] gap-6 relative z-10 w-full md:max-w-[832px] mx-auto py-3 px-2">
      <Fade>
        <h2 className="font-inter font-semibold text-center lg:text-[56px] lg:leading-[75px]  text-off-white-400 text-[32px] leading-[42px]  w-full">
          Manage Your Business Money with Confidence and Ease.
        </h2>
      </Fade>
      <div className="flex items-center justify-center">
        <Fade direction="down">
          <p className="font-inter font-normal lg:text-xl text-center text-[#E3E4E7] lg:leading-[35px] lg:w-[609px] text-base leading-[26px]">
            Say goodbye to the stress. Organize income, expenses, and all
            payments in one place, anytime, anywhere.
          </p>
        </Fade>
      </div>
      <div className="flex items-center justify-center mx-auto gap-3">
        <Fade direction="top-left">
          <Link
            href={unprotectedRoute.REGISTER}
            className="font-inter font-medium text-[14px] leading-[16.94px] md:text-base text-dark bg-[#F9D40E] md:w-[298px] py-[14px] px-6  rounded-[24px] flex items-center justify-center gap-[10px] "
          >
            Get Started Free <MoveRight />
          </Link>
        </Fade>

        <Fade direction="top-right">
          <Link
            href={unprotectedRoute.Login}
            className="md:hidden lg:hidden font-inter font-medium text-[14px] leading-[16.94px]  text-center text-off-white-400 border rounded-[24px] py-[14px] px-6 flex items-center justify-center gap-[10px] "
          >
            Login
          </Link>
        </Fade>
      </div>
    </div>
  );
};
