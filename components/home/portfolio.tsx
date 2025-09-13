"use client";
import { Case } from "@/components/ui/cases-with-infinite-scroll";


function PortfolioMini() {
  return (
    <div className="block pb-20">
      <Case
        images={[
          "/images/testim3.jpg",
          "/images/testim8.jpg",
          "/images/testim2.jpg",
          "/images/testim4.jpg",
          "/images/testim11.JPG",
          "/images/testim5.jpg",
          "/images/testim7.jpg",
          "/images/testim10.jpg",
          "/images/testim1.jpg",
          "/images/testim9.jpg",
        ]}
      />
    </div>
  );
}

export default PortfolioMini;
