"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Star, Camera, User, Mail } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

function Header1() {
  const navigationItems = [
    { title: "Services", href: "/services", Icon: Star },
    { title: "Portfolio", href: "/portfolio", Icon: Camera },
    { title: "About Me", href: "/about", Icon: User },
    { title: "Contact", href: "/contact", Icon: Mail },
  ];

  const leftItems = navigationItems.slice(0, 2);
  const rightItems = navigationItems.slice(2);

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30 bg-transparent">
      <div
        className={`flex items-center justify-between min-h-20 px-6 ${montserrat.className}`}
      >
        {/* Left nav */}
        <div className="hidden lg:flex items-center gap-6">
          {leftItems.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className={`flex items-center gap-2 fh-items font-medium uppercase text-white`}
            >
              {title.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-1">
          <Link href="/" className="no-underline mt-2">
            <p
              className="text-6xl cursor-pointer text-white fh-items" style={{ fontFamily: "DarlineScript, sans-serif" }}
            >
              Summer K&nbsp;&nbsp;Makeup
            </p>
          </Link>
        </div>

        {/* Right nav */}
        <div className="hidden lg:flex items-center gap-6">
          {rightItems.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className="flex items-center gap-2 fh-items font-medium uppercase text-white"
            >
              {title.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-black/30 backdrop-blur-md shadow-lg flex flex-col gap-2 py-6 z-40">
          {navigationItems.map(({ title, href, Icon }) => (
            <Link
              key={title}
              href={href}
              className="flex flex-row items-center gap-2 justify-center text-lg text-white cursor-pointer font-bold uppercase fh-items"
              onClick={() => setOpen(false)}
            >
              <Icon size={22} /> {title.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export { Header1 };
