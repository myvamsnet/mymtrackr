import { MoveRight } from 'lucide-react';

export const ShowCaseTitle = () => {
  return (
    <div className="grid md:gap-[52px] gap-6 relative z-10 w-full md:max-w-[821px] mx-auto py-3 px-4">
      <h2 className="font-inter font-semibold text-center lg:text-[56px] lg:leading-[75px]  text-off-white-400 text-[32px] leading-[42px] ">
        Manage Your Business Money with Confidence and Ease.
      </h2>
      <div className="flex items-center justify-center">
        <p className="font-inter font-normal lg:text-xl text-center text-[#E3E4E7] lg:leading-[35px] lg:w-[609px] text-base leading-[26px]">
          Say goodbye to the stress. Organize income, expenses, and all payments
          in one place, anytime, anywhere.
        </p>
      </div>
      <div className="flex items-center justify-center mx-auto gap-3">
        <button className="font-inter font-medium text-[14px] leading-[16.94px] md:text-base text-dark bg-[#F9D40E] md:w-[298px] py-[14px] px-6  rounded-[24px] flex items-center justify-center gap-[10px] ">
          Get Started Free <MoveRight />
        </button>

        <button className="md:hidden lg:hidden font-inter font-medium text-[14px] leading-[16.94px]  text-center text-off-white-400 border rounded-[24px] py-[14px] px-6 flex items-center justify-center gap-[10px] ">
          Login
        </button>
      </div>
    </div>
  );
};
