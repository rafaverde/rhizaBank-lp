import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { BiChevronDown } from "react-icons/bi";
import { Button } from "./button";
import Link from "next/link";

interface Faq {
  ask: string;
  answer: string;
  button?: {
    link: string;
    label: string;
  };
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
              <AccordionContent className="h-max overflow-hidden bg-rhiza-green-300 px-12 text-rhiza-green-900 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                <div className="py-8">
                  {faq.answer.split("\n").map((line, index) => (
                    <p key={index} className="mt-2 first:mt-0">
                      {line}
                    </p>
                  ))}
                </div>

                {faq.button ? (
                  <Link target="_blank" href={faq.button.link}>
                    <Button className="mb-10 rounded-lg border border-rhiza-green-900 bg-transparent px-8 py-3 font-bold uppercase text-rhiza-green-900 transition-colors hover:bg-rhiza-green-900 hover:text-rhiza-green-500 lg:flex">
                      {faq.button.label}
                    </Button>
                  </Link>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
