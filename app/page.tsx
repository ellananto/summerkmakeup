import Image from "next/image";
import { Footer } from "@/components/ui/footer";
import { Hexagon, Instagram } from "lucide-react";
import { Header1 } from "@/components/ui/header";
import HeroLanding from "@/components/home/hero";

export default function Home() {
  return (
    <div className="">
      {/* Header */}
      <Header1 />

      {/* Hero Main */}
      <HeroLanding />

      {/* Footer */}
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="SummerKMakeup"
        socialLinks={[
          {
            icon: <Instagram className="h-5 w-5" />,
            href: "https://www.instagram.com/summerkmakeup/",
            label: "Instagram",
          },
        ]}
        mainLinks={[
          { href: "/products", label: "Services" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Portolio" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 SummerKMakeup. All rights reserved.",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}
