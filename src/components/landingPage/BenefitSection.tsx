import { benefits } from "@/constant/benefits";
import Image from "next/image";
import Link from "next/link";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export const BenefitSection = () => {
  return (
    <div
      className="bg-off-white-400 py-16 px-4 md:py-24 lg:py-20 gap-16 lg:gap-[156px] grid wrapper"
      id="benefits"
    >
      {benefits.map((benefit) => {
        return benefit.position === "left" ? (
          <div className="benefitSection__card" key={benefit.id}>
            <div className="rounded-2xl bg-off-white w-full flex justify-center items-center">
              <Slide direction="left">
                <div className="pt-8 h-auto w-auto">
                  <Image
                    src={benefit.image}
                    alt="business-die"
                    className="h-auto lg:block hidden"
                    height={0}
                    width={530}
                    priority
                  />
                  <Image
                    src={benefit.image}
                    alt="business-die"
                    className="h-auto lg:hidden block"
                    height={0}
                    width={288}
                    priority
                  />
                </div>
              </Slide>
            </div>
            <div className="w-full   space-y-5">
              <Fade direction="up">
                <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
                  {benefit.title}
                  <span className="text-primary mx-1">{benefit.subtitle}</span>
                </h2>
              </Fade>
              <Zoom>
                <p className="font-inter font-normal text-base md:text-xl md:leading-[30px] text-dark-300">
                  {benefit.content}
                </p>
              </Zoom>
              <Zoom direction="down" className="m-0">
                <Link
                  href={"https://wa.me/+2348057384590"}
                  className="rounded-2xl border  py-3 px-8 gap-[10px] font-inter font-medium text-base md:text-[18px] text-center border-dark"
                  target="_blank"
                >
                  Learn more
                </Link>
              </Zoom>
            </div>
          </div>
        ) : (
          <div className="benefitSection__card" key={benefit.id}>
            <div className="w-full  gap-6 space-y-6">
              <Fade direction="left">
                <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
                  {benefit.title}
                  <span className="text-primary mx-1">{benefit.subtitle}</span>
                </h2>
              </Fade>
              <Zoom>
                <p className="font-inter font-normal text-base md:text-xl leading-[24px] md:leading-[30px] text-dark-300 ">
                  {benefit.content}
                </p>
              </Zoom>
              <Zoom direction="up">
                <Link
                  href={"https://wa.me/+2348057384590"}
                  className="rounded-2xl border  py-3 px-8 gap-[10px] font-inter font-medium text-base md:text-[18px] text-center border-dark"
                  target="_blank"
                >
                  Learn more
                </Link>
              </Zoom>
            </div>
            <div className="rounded-2xl bg-off-white w-full md:order-last order-first flex justify-center items-center">
              <Fade direction="right">
                <Image
                  src={benefit.image}
                  alt="business-die"
                  className="h-auto lg:block hidden"
                  height={0}
                  width={530}
                  priority
                />
                <Image
                  src={benefit.image}
                  alt="business-die"
                  className="h-auto lg:hidden block"
                  height={0}
                  width={288}
                  priority
                />
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
};
