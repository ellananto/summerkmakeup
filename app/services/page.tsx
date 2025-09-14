"use client";

import FAQs from "@/components/services/faqs";
import Policies from "@/components/services/policies";
import ServiceCards from "@/components/services/service-cards";

export default function Services() {
  return (
    <div>
      <ServiceCards />
      <Policies />
      <FAQs />
    </div>
  );
}
