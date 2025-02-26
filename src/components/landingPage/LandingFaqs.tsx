"use client";
import { Plus, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import FaqItem from "./FaqItem";

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
    <section className="w-full max-w-3xl mx-auto px-4 py-8 space-y-4">
      <h2 className="text-2xl font-bold  text-center leading-[32px] text-dark">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 bg-[#F4F8FF] lg:p-6 p-3">
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

// FAQs data
export const FAQs = [
  {
    question: "How do I install Mtrackr on my phone?",
    answer:
      'Click the "Install" button on our website ((link unavailable)) or click the "More" icon on your browser and select "Add to Home screen."',
  },
  {
    question:
      "What is the difference between Available Balance and Final Balance?",
    answer:
      "Available Balance = Income - Expenses. Final Balance = Income - Expenses + Debtors - Payables.",
  },
  {
    question: "How do I earn with referrals?",
    answer: `When someone registers using your referral code and subscribes, you'll receive ₦2000. Track your referral earnings on the "Refer and Earn" page.`,
  },
  {
    question: "How do I suggest a feature for the App?",
    answer: `Go to the "More" section and click "Chat with Support" or click the WhatsApp icon at the top right corner of your screen.`,
  },
  {
    question: "How many invoices or receipts can I generate?",
    answer:
      "You can generate as many invoices and receipts as you need - it's unlimited!",
  },
];
