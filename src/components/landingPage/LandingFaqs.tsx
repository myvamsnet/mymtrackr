"use client";
import { Plus, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import FaqItem from "./FaqItem";
import { FAQs } from "@/constant/products";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export const LandingFaqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="wrapper px-4 lg:py-20 space-y-4 py-10">
      <h2 className="font-inter font-semibold text-[28px] md:text-[44px] leading-[40px] md:leading-[65px] text-dark text-center">
        Your Questions Answered
      </h2>
      <div className="space-y-4 bg-[#F4F8FF] lg:p-6 p-3 rounded-[32px]">
        {FAQs.map((faq, index) => (
          <FaqItem
            index={index}
            faq={faq}
            openIndex={openIndex as number}
            toggleFAQ={toggleFAQ}
            key={`${faq.question}-${index}`}
          />
        ))}
        <FaqItem
          index={1000}
          faq={{
            question: " Can I convert an invoice to a receipt after payment?",
            answer: (
              <div className="">
                <h4>
                  Yes, you can convert an invoice to a receipt and vice versa.
                  To do this:
                </h4>
                <ol>
                  <li>1. Go to the Invoices and Receipts page.</li>
                  <li>2. Select the specific invoice or receipt.</li>
                  <li>
                    3. Click the More icon (top right corner of your screen).
                  </li>
                  <li>4. Select &quot;Convert&ldquo;.</li>
                </ol>
              </div>
            ),
          }}
          openIndex={openIndex as number}
          toggleFAQ={toggleFAQ}
        />
      </div>
    </section>
  );
};
