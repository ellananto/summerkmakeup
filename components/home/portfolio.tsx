"use client";
import { Case } from "@/components/ui/cases-with-infinite-scroll";

function PortfolioMini() {
  return (
    <div className="block overflow-x-hidden">
      <Case
        images={[
          "/images/testim4.jpg",
          "/images/testim8.jpg",
          "/images/testim5.jpg",
          "/portfolio-2/IMG_0089.jpg",
          "/portfolio-2/IMG_145.jpg",
          "/images/testim10.jpg",
        ]}
      />
    </div>
  );
}

export default PortfolioMini;
