import { Plus, X } from "lucide-react";
import React, { ReactNode } from "react";

const FaqItem = ({ faq, toggleFAQ, index, openIndex }: AccordionContent) => {
  return (
    <div
      key={index}
      className={`  rounded-lg overflow-hidden bg-white  ${
        openIndex === index ? "border-primary border" : ""
      }`}
    >
      <button
        className={`w-full  lg:px-4 lg:pt-8 p-6 ${
          openIndex === index ? "pb-2" : "pb-6"
        } text-left  focus:outline-none flex justify-between  bg-white`}
        onClick={() => toggleFAQ(index)}
        aria-expanded={openIndex === index}
      >
        <span className="font-semibold lg:text-2xl text-base leading-[23.76px] ">
          {faq.question}
        </span>

        {openIndex === index ? (
          <span>
            <X className="lg:size-6 size-5" color="#40414A" />
          </span>
        ) : (
          <span>
            <Plus className="lg:size-6 size-5" color="#1C1B1F" />
          </span>
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out space-y-2 ${
          openIndex === index ? "max-h-96 px-6 pb-6 pt-4 b-white" : "max-h-0"
        }`}
      >
        <div className=" bg-white font-inter font-normal text-base md:text-xl leading-[24px] md:leading-[30px] text-dark-300">
          {faq.answer}
        </div>
        {faq.answer2 && (
          <div className=" bg-white font-inter font-normal text-base md:text-xl leading-[24px] md:leading-[30px] text-dark-300">
            {faq.answer2}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
interface AccordionContent {
  faq: {
    question: string;
    answer: ReactNode;
    answer2?: ReactNode;
  };
  toggleFAQ: (index: number) => void;
  openIndex: number;
  index: number;
}
