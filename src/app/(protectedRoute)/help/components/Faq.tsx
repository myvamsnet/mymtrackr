import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/constant/products";

export const Faq = () => {
  return (
    <section className="md:my-10 my-5 bg-off-white-300 w-full">
      <h4 className="md:text-base text-sm font-medium text-dark font-inter pb-2 pt-3 px-4 border-b border-[#F4F5F7]">
        Frequently Asked Questions
      </h4>

      <Accordion type="single" collapsible className="w-full px-4">
        {FAQs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="py-2">
            <AccordionTrigger className="text-sm text-[#3E3E4C]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-[#3E3E4C]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
        <AccordionItem value={`item-${40}`} className="py-2">
          <AccordionTrigger className="text-sm text-[#3E3E4C]">
            Can I convert an invoice to a receipt after payment?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-[#3E3E4C] space-y-2">
            <h4>
              Yes, you can convert an invoice to a receipt and vice versa. To do
              this:
            </h4>
            <ol>
              <li>1.⁠ ⁠Go to the Invoices and Receipts page.</li>
              <li>2.⁠ ⁠Select the specific invoice or receipt.</li>
              <li>
                3.⁠ ⁠Click the More icon (top right corner of your screen).
              </li>
              <li>4.⁠ ⁠Select "Convert".</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
