/* eslint-disable react/no-unescaped-entities */
import { featuresection } from "@/constant/landingPageNav";
import { Fragment } from "react";
import { Fade, Slide } from "react-awesome-reveal";

export const FeatureSection = () => {
  return (
    <div className="bg-overlay-2 bg-cover bg-center h-auto  md:px-[148px] py-16 px-4 md:py-24 lg:py-[180px] gap-16 lg:gap-[156px] grid">
      <div className="wrapper h-auto grid gap-[40px] md:gap-[84px]">
        <div className="max-w-[759px] mx-auto grid gap-4 text-center">
          <Fade cascade direction="up">
            <h2 className="font-inter font-semibold text-3xl md:text-[44px] leading-tight md:leading-[65px] text-dark">
              Embrace a <span className="text-primary">New World</span> with
              Mtrackr
            </h2>
          </Fade>
          <Slide direction="up">
            <p className="font-inter font-normal text-base md:text-[20px] leading-relaxed md:leading-[30px] text-dark-300">
              Embrace a New World with Mtrackr. Say goodbye to "someone must be
              stealing my money." Confidently manage your business money with
              ease.
            </p>
          </Slide>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {featuresection.map((feature, index) => (
            <Fragment key={`feature-${index}`}>
              <Fade
                direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
              >
                <div
                  className="w-full h-[240px] bg-center bg-cover relative flex justify-end items-center flex-col py-[10px]"
                  style={{ backgroundImage: `url(${feature.image})` }}
                >
                  <div className="w-[317.33px]  p-[10px] gap-[10px] rounded-lg bg-off-white-400 font-inter text-dark font-semibold text-base/4 md:text-2xl/6 text-center ">
                    {feature.text}
                  </div>
                </div>
              </Fade>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
