"use client";
import type React from "react";
import { useState } from "react";
import { FAQs } from "@/constant/products";
import AccordionContent from "./AccordionContent";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className=" bg-[#FBFCFF] rounded-lg w-full">
      <h2 className="py-3 px-4 text-sm font-medium text-dark border-b border-[#F4F5F7]">
        Frequently Asked Questions
      </h2>
      <div className="p-4">
        {FAQs.map((faq, index) => (
          <AccordionContent
            index={index}
            faq={faq}
            openIndex={openIndex as number}
            toggleFAQ={toggleFAQ}
          />
        ))}
        <AccordionContent
          index={10}
          faq={{
            question: " Can I convert an invoice to a receipt after payment?",
            answer: (
              <div className="text-sm text-[#3E3E4C] space-y-2">
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
                  <li>4. Select &quot;Conver&ldquo;.</li>
                </ol>
              </div>
            ),
          }}
          openIndex={openIndex as number}
          toggleFAQ={toggleFAQ}
        />
      </div>
    </main>
  );
};
