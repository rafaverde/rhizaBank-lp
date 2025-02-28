import { FaqBox } from "../faq-box";

import { faqs } from "../../data/faqs-rhiza.json";

export function FaqSection() {
  return (
    <section id="faqs" className="bg-rhiza-green-900">
      <div className="flex w-full flex-col gap-5 px-4 py-7 md:flex md:py-14 lg:m-auto lg:max-w-[1170px] lg:justify-between">
        <h2 className="mb-4 text-4xl font-bold text-rhiza-green-100 md:text-2xl lg:text-6xl">
          Perguntas frequentes
        </h2>

        <FaqBox faqs={faqs} />
      </div>
    </section>
  );
}
