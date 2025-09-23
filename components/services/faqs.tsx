import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";

const items = [
  {
    id: "1",
    title: "How far in advance should I book my appointment?",
    sub: "",
    content:
      "It’s best to book at least 4–6 weeks ahead, especially for weddings and busy event seasons. This ensures you get your preferred date and time.",
  },
  {
    id: "3",
    title: "How should I prepare my skin before my appointment?",
    sub: "",
    content:
      "Arrive with a clean, moisturized face—no makeup. Exfoliating the night before can help your foundation go on smoother.",
  },
  {
    id: "4",
    title: "How long will my makeup last?",
    sub: "",
    content:
      "Your makeup is designed to last all day (and night!) with professional products and techniques. For weddings and photoshoots, I also provide touch-up tips to keep you looking flawless, with an option to pay for touch ups when needed.",
  },
  {
    id: "5",
    title: "Can I bring my own makeup or products?",
    sub: "",
    content:
      "You’re welcome to bring any personal products, but I’ll use my professional kit for the best long-lasting results.",
  },
  {
    id: "6",
    title: "Do you do makeup for all ages?",
    sub: "",
    content:
      "Yes! From flower girls to adults, I tailor techniques and products to suit each age group.",
  },
  {
    id: "7",
    title: "Will my makeup photograph well?",
    sub: "",
    content:
      "Absolutely! I specialize in makeup that looks flawless in person and on camera under natural or studio lighting.",
  },
  {
    id: "8",
    title: "Can I request a trial for a hairstyle too?",
    sub: "",
    content:
      "I focus on makeup, but I do have contact with hairstylists I've previous worked with, and can coordinate with your hairstylist to ensure the full look is cohesive for photos and events.",
  },
  {
    id: "10",
    title: "Do you provide tips for maintaining makeup throughout the day?",
    sub: "",
    content:
      "Yes! I give personalized guidance and tricks to keep your makeup fresh, plus optional touch-up services if needed.",
  },
];

export default function FAQs() {
  return (
    <div
      className={`py-20 flex flex-col justify-center items-center ${montserrat.className}`}
      style={{ backgroundColor: "#FFCCDD" }}
    >
      <div className="text-center mb-12">
        <h1 className="text-7xl font-light text-red-700">FAQs</h1>
      </div>

      <div className="w-[70vw] max-w-[1200px] space-y-4 bg-white p-10 rounded-lg shadow-lg mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="3"
        >
          {items.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="py-2 text-red-700 w-full"
            >
              <AccordionPrimitive.Header className="w-full">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between w-full py-2 text-left text-[30px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  <span className="flex flex-col space-y-1 text-lg font-normal">
                    <span className="text-xl">{item.title}</span>
                    {item.sub && (
                      <span className="text-xl font-thin">{item.sub}</span>
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
              <AccordionContent className="pb-2 text-muted-foreground text-md w-full">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
