"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GradientSection } from "@/components/ui/gradient-background";
import { CircleHelp } from "lucide-react";
import { useTranslations } from "next-intl";

export function FAQSection() {
  const t = useTranslations("frontend.home.faq");

  const faqs = [
    { key: "q1", question: t("q1.question"), answer: t("q1.answer") },
    { key: "q2", question: t("q2.question"), answer: t("q2.answer") },
    { key: "q3", question: t("q3.question"), answer: t("q3.answer") },
    { key: "q4", question: t("q4.question"), answer: t("q4.answer") },
    { key: "q5", question: t("q5.question"), answer: t("q5.answer") },
    { key: "q6", question: t("q6.question"), answer: t("q6.answer") },
  ];

  return (
    <GradientSection variant="blue-purple" className="mb-16 px-4">
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gradient-blue to-gradient-purple text-white mb-4 shadow-lg">
            <CircleHelp className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            {t("title")}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.key}
              value={`item-${index}`}
              className="border-2 border-gray-200 dark:border-gray-800 rounded-xl px-6 bg-white dark:bg-gray-900 hover:border-gradient-blue dark:hover:border-gradient-blue transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <AccordionTrigger className="hover:no-underline text-left">
                <span className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-gradient-blue to-gradient-purple text-white text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-9 pr-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </GradientSection>
  );
}
