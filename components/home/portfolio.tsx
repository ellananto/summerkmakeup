"use client";
import { Case } from "@/components/ui/cases-with-infinite-scroll";

function PortfolioMini() {
  return (
    <div className="block overflow-x-hidden">
      <Case
        images={[
          "/images/testim2.jpg",
          "/images/testim29.jpg",
          "/images/testim4.jpg",
          "/images/testim7.jpg",
          "/portfolio-2/IMG_145.jpg",
          "/images/testim14.jpg",
        ]}
      />
    </div>
  );
}

export default PortfolioMini;
