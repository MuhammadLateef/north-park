"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { treks } from "@/lib/treks-data";

const logo = "/logo.png";

type NavLink = {
  label: string;
  href?: string;
  dropdown?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tour" },
  { label: "Trekking", dropdown: true },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  // FIX: typed as string | null instead of just null
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setActiveDropdown(activeDropdown === "trekking" ? null : "trekking");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-stone-800">
          <Image src={logo} width={100} height={100} alt="logo" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.dropdown ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "trekking" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "trekking" && (
                    <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-stone-200 z-50 overflow-hidden">
                      <div className="py-2">
                        {treks.map((trek) => (
                          <Link
                            key={trek.id}
                            href={`/treks/${trek.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-3 hover:bg-emerald-50 transition-colors text-sm"
                          >
                            <div className="font-medium text-stone-700">
                              {trek.title}
                            </div>
                            <p className="text-xs text-stone-500 mt-1">
                              {trek.subtitle}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // FIX: only render Link when href is defined
                link.href && (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-5 text-sm font-semibold">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 p-6">
            {/* Close + Logo */}
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 font-bold text-stone-800"
              >
                <Mountain className="h-5 w-5 text-emerald-600" />
                <span>Go North Pak</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-4 mb-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          // FIX: typed correctly, no longer errors
                          setActiveDropdown(
                            activeDropdown === "mobile-trekking"
                              ? null
                              : "mobile-trekking"
                          )
                        }
                        className="flex items-center gap-2 w-full text-base font-medium text-stone-700 hover:text-emerald-600 transition-colors py-1"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === "mobile-trekking"
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === "mobile-trekking" && (
                        <div className="mt-2 pl-4 space-y-2 border-l-2 border-emerald-200">
                          {treks.map((trek) => (
                            <Link
                              key={trek.id}
                              href={`/treks/${trek.slug}`}
                              onClick={() => {
                                setOpen(false);
                                setActiveDropdown(null);
                              }}
                              className="block text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors py-1"
                            >
                              <div>{trek.title}</div>
                              <p className="text-xs text-stone-500">
                                {trek.subtitle}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // FIX: only render Link when href is defined
                    link.href && (
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block text-base font-medium text-stone-700 hover:text-emerald-600 transition-colors py-1"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <Button
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}