import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className="wrapper py-16 px-4 md:py-24 lg:py-[180px] gap-16 lg:gap-[156px] grid">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[76px] items-center">
        <Image
          src={'/images/businessdie.png'}
          alt="business-die"
          height={309}
          width={530}
        />
        <div className="grid gap-4">
          <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
            90% of Businesses Die Due to
            <span className="text-primary"> Lack of Proper Records</span>
          </h2>
          <p className="font-inter font-normal text-base md:text-xl text-dark-300">
            What you don’t measure, you can’t grow. It’s crucial to stay
            organized and keep proper records.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[76px] items-center">
        <div className="grid gap-4">
          <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
            80% of Business Stress is Due to
            <span className="text-primary"> Lack of Proper Records</span>
          </h2>
          <p className="font-inter font-normal text-base md:text-xl text-dark-300">
            Stop using your brain as storage folder. Let Mtrackr handle
            everything all in one place for you.
          </p>
        </div>
        <Image
          src={'/images/businessstress.png'}
          alt="business-stress"
          className="w-full md:order-last order-first"
          height={309}
          width={530}
        />
      </div>
    </div>
  );
};
