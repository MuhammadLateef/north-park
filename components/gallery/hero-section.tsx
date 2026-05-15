"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { GalleryItem } from "@/lib/gallery-data";

interface HeroSectionProps {
  gallery: GalleryItem;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ gallery }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial animation on mount
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* Background Image with Parallax */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src={gallery.heroImage}
          alt={gallery.title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6 text-center text-white"
      >
        <div className="space-y-2">
          <p className="text-lg font-light tracking-widest uppercase text-white/80">
            {gallery.location}
          </p>
          <h1 className="text-balance text-5xl font-light md:text-7xl">
            {gallery.title}
          </h1>
        </div>

        <p className="max-w-2xl text-lg font-light leading-relaxed text-white/90">
          {gallery.description}
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2">
          <p className="text-sm font-light uppercase tracking-widest text-white/70">
            Scroll to Explore
          </p>
          <div className="flex flex-col gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-1 w-0.5 rounded-full bg-white/70 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
