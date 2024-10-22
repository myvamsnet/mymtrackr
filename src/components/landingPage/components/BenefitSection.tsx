import Image from 'next/image';

export const BenefitSection = () => {
  return (
    <div className="bg-off-white-400 py-16 px-4 md:py-24 lg:py-[180px] gap-16 lg:gap-[156px] grid wrapper">
      <div className="benefitSection__card">
        <div className="rounded-2xl bg-off-white w-full flex justify-center items-center">
          <Image
            src={'/images/history.png'}
            alt="business-die"
            className="h-full mt-3"
            height={0}
            width={274.63}
          />
        </div>
        <div className="w-full md:w-[538px] h-auto md:h-[349px] gap-6 space-y-6">
          <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
            Record Business Transactions
            <span className="text-primary"> Anytime, Anywhere</span>
          </h2>
          <p className="font-inter font-normal text-base md:text-xl md:leading-[30px] text-dark-300">
            Mtrackr gives you the freedom and flexibility to run your business
            smoothly.
          </p>
          <button className="rounded-2xl border py-3 px-8 gap-[10px] font-inter font-medium text-base md:text-[18px] text-center border-dark">
            Learn more
          </button>
        </div>
      </div>

      <div className="benefitSection__card">
        <div className="w-full md:w-[538px] h-auto md:h-[349px] gap-6 space-y-6">
          <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
            Track Debts and Outstanding Payments
            <span className="text-primary"> Like the Pro!</span>
          </h2>
          <p className="font-inter font-normal text-base md:text-xl leading-[24px] md:leading-[30px] text-dark-300 ">
            Unclear cash flow can hurt your business. You deserve a simple way
            to stay on top of your game.
          </p>
          <button className="rounded-2xl border py-3 px-8 gap-[10px] font-inter font-medium text-base md:text-[18px] text-center border-dark">
            Learn more
          </button>
        </div>
        <div className="rounded-2xl bg-off-white w-full md:order-last order-first flex justify-center items-center">
          <Image
            src={'/images/records.png'}
            alt="business-stress"
            className="h-full mt-3"
            height={0}
            width={274.63}
          />
        </div>
      </div>

      <div className="benefitSection__card">
        <div className="rounded-2xl bg-off-white w-full flex justify-center items-center">
          <Image
            src={'/images/history.png'}
            alt="business-die"
            className="h-full mt-3"
            height={0}
            width={274.63}
          />
        </div>
        <div className="w-full md:w-[538px] h-auto md:h-[349px] gap-6 space-y-6">
          <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
            Record Business Transactions
            <span className="text-primary"> Anytime, Anywhere</span>
          </h2>
          <p className="font-inter font-normal text-base md:text-xl leading-[24px] md:leading-[30px] text-dark-300">
            Mtrackr gives you the freedom and flexibility to run your business
            smoothly.
          </p>
          <button className="rounded-2xl border py-3 px-8 gap-[10px] font-inter font-medium text-base md:text-[18px]  text-center border-dark">
            Learn more
          </button>
        </div>
      </div>

      <div className="benefitSection__card">
        <div className="w-full md:w-[538px] h-auto md:h-[349px] gap-6 space-y-6">
          <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark">
            Track Debts and Outstanding Payments
            <span className="text-primary"> Like the Pro!</span>
          </h2>
          <p className="font-inter font-normal text-base md:text-xl leading-[24px] md:leading-[30px] text-dark-300">
            Unclear cash flow can hurt your business. You deserve a simple way
            to stay on top of your game.
          </p>
          <button className="rounded-2xl border py-3 px-8 gap-[10px] font-inter font-medium text-base md:text-[18px] text-center border-dark">
            Learn more
          </button>
        </div>
        <div className="rounded-2xl bg-off-white w-full flex justify-center items-center  md:order-last order-first">
          <Image
            src={'/images/records.png'}
            alt="business-stress"
            className="h-full mt-3"
            height={0}
            width={274.63}
          />
        </div>
      </div>
    </div>
  );
};
