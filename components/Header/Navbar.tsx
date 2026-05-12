"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain, X } from "lucide-react";
import Link from "next/link";
import {logo} from "@/app/Index"
import Image from "next/image";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Trekking", href: "/trekking" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-stone-800">
          <Image src={logo} width={100} height={100} alt="logo"/>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </Link>
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
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-stone-700 hover:text-emerald-600 transition-colors py-1"
                  >
                    {link.label}
                  </Link>
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