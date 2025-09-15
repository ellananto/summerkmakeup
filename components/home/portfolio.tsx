"use client";
import { Case } from "@/components/ui/cases-with-infinite-scroll";


function PortfolioMini() {
  return (
    <div className="block pb-20">
      <Case
        images={[
          "/images/testim3.JPG",
          "/images/testim8.JPG",
          "/images/testim2.JPG",
          "/images/testim4.JPG",
          "/images/testim11.JPG",
          "/images/testim5.JPG",
          "/images/testim7.JPG",
          "/images/testim10.JPG",
          "/images/testim1.JPG",
          "/images/testim9.JPG",
        ]}
      />
    </div>
  );
}

export default PortfolioMini;
