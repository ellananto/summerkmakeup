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
    id: "2",
    title: "Do you offer trial sessions for bridal makeup?",
    sub: "",
    content:
      "Yes! Bridal trials are highly recommended so we can perfect your look together before your big day. Trials include a full consultation and application, and are counted as a makeup service in the package you choose.",
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
];

export default function FAQs() {
  return (
    <div className={`mt-30 ${montserrat.className}`}>
      <div className="text-left mb-12 ml-15">
        <h1 className="text-7xl font-light text-pink-600">FAQs</h1>
      </div>
      <div className="max-w-[500px] space-y-4 ml-15">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="3"
        >
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="py-2">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  <span className="flex flex-col space-y-1 text-lg font-normal">
                    <span>{item.title}</span>
                    {item.sub && (
                      <span className="text-lg font-thin">{item.sub}</span>
                    )}
                  </span>
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 opacity-60 transition-transform duration-200 hover:cursor-pointer text-pink-600"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-2 text-muted-foreground text-md">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
