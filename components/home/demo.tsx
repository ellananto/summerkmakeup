"use client";

import { DicedHeroSection } from "@/components/ui/diced-hero-section";
import { Montserrat } from "next/font/google";
// import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export function DemoLTR() {
  return (
    <>
      <DicedHeroSection
        mainText="Tired of makeup that just doesn’t feel like you?"
        topText="Makeup by Summer"
        subMainText="Struggling to get the look you want? ..."
        buttonText="Learn More"
        slides={[
          { title: "Purple Cauliflower", image: "/images/makeups.JPG", width: 400, height: 400 },
          { title: "Strawberry", image: "/images/brush-polaroids.JPG", width: 400, height: 400 },
          { title: "Feijoa", image: "/images/makeups.JPG", width: 400, height: 400 },
          { title: "Fruits and Vegetables", image: "/images/brush-polaroids.JPG", width: 400, height: 400 },
        ]}
        onMainButtonClick={() => console.log("Main button clicked for LTR")}
        onGridImageHover={(index) => console.log(`Grid image ${index} hovered for LTR`)}
        onGridImageClick={(index) => console.log(`Grid image ${index} clicked for the LTR`)}
        topTextStyle={{ color: "var(--diced-hero-section-top-text)" }}
        mainTextStyle={{ fontSize: "4.5rem", color: "#b91c1c" }}
        subMainTextStyle={{ color: "var(--diced-hero-section-sub-text)" }}
        buttonStyle={{
          backgroundColor: "pink",
          color: "var(--diced-hero-section-button-fg)",
          borderRadius: "2rem",
          hoverColor: "#b91c1c",
          hoverForeground: "var(--diced-hero-section-button-hover-fg)",
        }}
        separatorColor="pink"
        mobileBreakpoint={1000}
        fontFamily={montserrat.style.fontFamily}
      />
      <style jsx>{`
        .pulse-scale {
          display: inline-block;
          animation: pulseScale 2s infinite;
        }
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </>
  );
}

