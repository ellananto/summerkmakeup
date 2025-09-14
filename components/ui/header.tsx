"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Star, Camera, User, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // get current route

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text color: white on home, red elsewhere (when not scrolled)
  const defaultTextColor =
    pathname === "/" ? "text-white" : "text-black";

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div
        className={`flex items-center justify-between min-h-20 px-6 ${montserrat.className}`}
      >
        {/* Left nav */}
        <div className="hidden lg:flex items-center gap-6">
          {leftItems.map(({ title, href, Icon }) => (
            <Link
              key={title}
              href={href}
              className={`flex items-center gap-2 transition-colors duration-300 font-bold uppercase ${
                scrolled ? "text-gray-800 hover:text-red-700" : defaultTextColor
              }`}
            >
              <Icon size={18} /> {title.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-1">
          <Link href="/" className="no-underline">
            <p
              className={`text-4xl font-bold italic cursor-pointer transition-colors duration-300 ${
                scrolled
                  ? "text-[#FF99BD]"
                  : pathname === "/"
                  ? "text-white"
                  : "text-[#FF99BD]"
              }`}
            >
              summer k makeup.
            </p>
          </Link>
        </div>

        {/* Right nav */}
        <div className="hidden lg:flex items-center gap-6">
          {rightItems.map(({ title, href, Icon }) => (
            <Link
              key={title}
              href={href}
              className={`flex items-center gap-2 transition-colors duration-300 font-bold uppercase ${
                scrolled ? "text-gray-800 hover:text-red-700" : defaultTextColor
              }`}
            >
              <Icon size={18} /> {title.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <X
                className={`w-6 h-6 ${scrolled ? "text-gray-800" : defaultTextColor}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${scrolled ? "text-gray-800" : defaultTextColor}`}
              />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col gap-2 py-6 z-50">
          {navigationItems.map(({ title, href, Icon }) => (
            <Link
              key={title}
              href={href}
              className="flex flex-row items-center gap-2 justify-center text-lg text-gray-800 hover:text-red-700 cursor-pointer transition-colors duration-300 font-bold uppercase"
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
