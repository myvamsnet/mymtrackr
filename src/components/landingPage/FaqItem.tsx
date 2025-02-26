import { Plus, X } from "lucide-react";
import React, { ReactNode } from "react";

const FaqItem = ({ faq, toggleFAQ, index, openIndex }: AccordionContent) => {
  return (
    <div
      key={index}
      className={`  rounded-lg overflow-hidden  ${
        openIndex === index ? "border-primary border" : ""
      }`}
    >
      <button
        className={`w-full lg:p-4 p-6 text-left  focus:outline-none flex justify-between  bg-white gap-3`}
        onClick={() => toggleFAQ(index)}
        aria-expanded={openIndex === index}
      >
        <span className="font-semibold text-base ">{faq.question}</span>

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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openIndex === index ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-white text-dark-300 text-base font-normal">
          {faq.answer}
        </div>
        {faq.answer2 && (
          <div className="px-4 pb-4 bg-white text-dark-300 text-base font-normal">
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
