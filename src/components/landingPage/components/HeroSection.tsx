import Image from "next/image";
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";

export const HeroSection = () => {
  return (
    <div
      className="wrapper py-16 px-4 md:py-24 lg:py-[180px] gap-16 lg:gap-[156px] grid"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[76px] items-center">
        <Fade direction="left">
          <Image
            src={"/images/businessdie.png"}
            alt="business-die"
            height={309}
            width={530}
          />
        </Fade>

        <div className="grid gap-4">
          <Slide direction="up">
            <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
              90% of Businesses Die Due to
              <span className="text-primary"> Lack of Proper Records</span>
            </h2>
          </Slide>
          <Zoom>
            <p className="font-inter font-normal text-base md:text-xl text-dark-300">
              What you don’t measure, you can’t grow. It’s crucial to stay
              organized and keep proper records.
            </p>
          </Zoom>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[76px] items-center">
        <div className="grid gap-4">
          <Slide direction="up">
            <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
              80% of Business Stress is Due to
              <span className="text-primary"> Lack of Proper Records</span>
            </h2>
          </Slide>
          <Zoom>
            <p className="font-inter font-normal text-base md:text-xl text-dark-300">
              Stop using your brain as storage folder. Let Mtrackr handle
              everything all in one place for you.
            </p>
          </Zoom>
        </div>
        <div className="md:order-last order-first">
          <Fade direction="right">
            <Image
              src={"/images/businessstress.png"}
              alt="business-stress"
              className="w-full "
              height={309}
              width={530}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};
