import { benefits } from "@/constant/benefits";
import Image from "next/image";
import Link from "next/link";

export const BenefitSection = () => {
  return (
    <div
      className="bg-off-white-400 py-16 px-4 md:py-24 lg:py-[180px] gap-16 lg:gap-[156px] grid wrapper"
      id="benefits"
    >
      {benefits.map((benefit) => {
        return benefit.position === "left" ? (
          <div
            className="benefitSection__card"
            key={benefit.id}
          >
            <div className="rounded-2xl bg-off-white w-full flex justify-center items-center">
              <Image
                src={benefit.image}
                alt="business-die"
                className="h-full mt-3"
                height={0}
                width={274.63}
              />
            </div>
            <div className="w-full md:w-[538px] h-auto md:h-[349px] gap-6 space-y-6">
              <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
                {benefit.title}
                <span className="text-primary mx-1">{benefit.subtitle}</span>
              </h2>
              <p className="font-inter font-normal text-base md:text-xl md:leading-[30px] text-dark-300">
                {benefit.content}
              </p>
              <div>
                <Link
                  href={"https://wa.me/+2348057384590"}
                  className="rounded-2xl border  py-3 px-8 gap-[10px] font-inter font-medium text-base md:text-[18px] text-center border-dark"
                  target="_blank"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="benefitSection__card"
            key={benefit.id}
          >
            <div className="w-full md:w-[538px] h-auto md:h-[349px] gap-6 space-y-6">
              <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
                {benefit.title}
                <span className="text-primary mx-1">{benefit.subtitle}</span>
              </h2>
              <p className="font-inter font-normal text-base md:text-xl leading-[24px] md:leading-[30px] text-dark-300 ">
                {benefit.content}
              </p>
              <div>
                <Link
                  href={"https://wa.me/+2348057384590"}
                  className="rounded-2xl border  py-3 px-8 gap-[10px] font-inter font-medium text-base md:text-[18px] text-center border-dark"
                  target="_blank"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-off-white w-full md:order-last order-first flex justify-center items-center">
              <Image
                src={benefit.image}
                alt="business-stress"
                className="h-full mt-3"
                height={0}
                width={274.63}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
