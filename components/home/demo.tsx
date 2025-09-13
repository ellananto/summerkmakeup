"use client";

import { DicedHeroSection } from "@/components/ui/diced-hero-section";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export function DemoLTR() {
  return (
    <DicedHeroSection
      mainText={
        <>
          Tired of makeup that doesn’t feel like{" "}
          <motion.span
            className="inline-block text-red-700"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            you?
          </motion.span>
        </>
      }
      subMainText=" Struggling to get the look you want? Feeling frustrated when your makeup doesn’t match your style or personality? You’re not alone. Summer totally gets it. With years of experience helping people feel confident in their own skin, she specializes in creating makeup that enhances your natural beauty and fits your personality. Whether it’s everyday looks or special occasions, she’ll guide you to a look that truly feels like you."
      buttonText="Learn More"
      slides={[
        { title: "Purple Cauliflower", image: "/images/makeups.JPG" },
        { title: "Strawberry", image: "/images/brush-polaroids.JPG" },
        { title: "Feijoa", image: "/images/makeups.JPG" },
        {
          title: "Fruits and Vegetables",
          image: "/images/brush-polaroids.JPG",
        },
      ]}
      onMainButtonClick={() => console.log("Main button clicked for LTR")}
      onGridImageHover={(index) =>
        console.log(`Grid image ${index} hovered for LTR`)
      }
      onGridImageClick={(index) =>
        console.log(`Grid image ${index} clicked for the LTR`)
      }
      topTextStyle={{ color: "var(--diced-hero-section-top-text)" }}
      mainTextStyle={{
        fontSize: "4.5rem",
        color: "#b91c1c",
      }}
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
    >
      {/* Add the animation CSS */}
      <style jsx>{`
        .pulse-scale {
          display: inline-block;
          animation: pulseScale 2s infinite;
        }
        @keyframes pulseScale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </DicedHeroSection>
  );
}
