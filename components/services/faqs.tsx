"use client";

import { Montserrat } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const items = [

  {
    id: "3",
    title: "How should I prepare my skin before my appointment?",
    sub: "",
    content:
      "Arrive with a clean, moisturized face—no makeup.",
  },
  {
    id: "4",
    title: "How long will my makeup last?",
    sub: "",
    content:
      "Your makeup is designed to last all day (and night!) with professional products and techniques. For bridal makeup, touch up kits are provided. with an option to pay for touch up services if needed.",
  },
  {
    id: "5",
    title: "Can I bring my own makeup or products?",
    sub: "",
    content:
      "You’re welcome to bring any personal products, but I’ll use my professional kit for the best long-lasting results.",
  },
  {
    id: "8",
    title: "Can I get a hair stylist through you?",
    sub: "",
    content:
      "I am only a makeup artist, but I do have contact with hairstylists I've previous worked with, and can coordinate with your hairstylist to ensure the full look is cohesive for photos and events.",
  },
];

export default function FAQs() {
  return (
    <div
      className={`py-14 px-5 sm:py-20 flex flex-col justify-center items-center ${montserrat.className}`}
      style={{ backgroundColor: "#FFCCDD" }}
    >
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h1
          className="text-5xl sm:text-7xl text-red-700 leading-tight"
          style={{ fontFamily: "DarlineScript, sans-serif" }}
        >
          Common
          <span
            className="-ml-1 sm:-ml-2"
            style={{ fontFamily: "DarlineSerif, sans-serif" }}
          >
            FAQ&apos;s
          </span>
        </h1>
      </div>

      {/* Accordion */}
      <div className="w-full max-w-[1200px] px-4 sm:px-8 space-y-4 bg-white p-6 sm:p-10 rounded-lg shadow-lg">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="py-2 text-red-700 w-full"
            >
              <AccordionPrimitive.Header className="w-full">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between w-full py-2 text-left text-[20px] sm:text-[28px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  <span className="flex flex-col space-y-1 text-base sm:text-lg font-normal">
                    <span className="text-lg sm:text-xl">{item.title}</span>
                    {item.sub && (
                      <span className="text-base sm:text-lg font-thin">
                        {item.sub}
                      </span>
                    )}
                  </span>
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 opacity-60 transition-transform duration-200 text-red-700 hover:cursor-pointer hover:text-red-900"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-2 text-gray-700 text-sm sm:text-base w-full">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
