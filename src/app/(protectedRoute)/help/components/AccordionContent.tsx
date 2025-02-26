import { ChevronDown } from "lucide-react";
import React, { ReactNode } from "react";

const AccordionContent = ({
  faq,
  toggleFAQ,
  index,
  openIndex,
}: AccordionContent) => {
  return (
    <div className="border-b border-off-white-200 rounded-lg overflow-hidden  py-5">
      <button
        className="w-full text-left focus:outline-none flex justify-between border-none outline-none py-4"
        onClick={() => toggleFAQ(index)}
        aria-expanded={openIndex === index}
      >
        <span className="font-normal  text-sm leading-[22.4px] text-[#3E3E4C]">
          {faq.question}
        </span>
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${
            openIndex === index ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openIndex === index ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="py-4">
          <p className="text-sm text-[#3E3E4C] space-y-2">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionContent;
interface AccordionContent {
  faq: {
    question: string;
    answer: ReactNode;
  };
  toggleFAQ: (index: number) => void;
  openIndex: number;
  index: number;
}
