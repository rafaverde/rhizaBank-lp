import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { BiChevronDown } from "react-icons/bi";

interface Faq {
  ask: string;
  answer: string;
}

interface FaqBoxProps {
  faqs: Faq[];
}

export function FaqBox({ faqs }: FaqBoxProps) {
  return (
    <div>
      <Accordion
        collapsible
        type="single"
        className="rounded-xl bg-rhiza-green-900"
      >
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-rhi mt-px overflow-hidden text-sm first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 md:text-lg"
            >
              <AccordionTrigger className="group flex w-[100%] flex-1 cursor-default items-center justify-between bg-rhiza-green-500 p-4 text-left text-sm font-bold leading-none text-rhiza-green-100 outline-none hover:bg-rhiza-blue-500 md:text-lg">
                <h3>{faq.ask}</h3>
                <BiChevronDown className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown h-max overflow-hidden bg-rhiza-green-300 px-4 text-rhiza-green-900">
                <div className="py-4">
                  {faq.answer.split("\n").map((line, index) => (
                    <p key={index} className="mt-2 first:mt-0">
                      {line}
                    </p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
