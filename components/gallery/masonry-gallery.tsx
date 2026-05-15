"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GalleryItem } from "@/lib/gallery-data";

gsap.registerPlugin(ScrollTrigger);

interface MasonryGalleryProps {
  gallery: GalleryItem;
  onImageClick: (index: number) => void;
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  gallery,
  onImageClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scroll-triggered animation
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            markers: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-light uppercase tracking-widest text-accent">
            Complete Collection
          </p>
          <h2 className="text-4xl font-light md:text-5xl">
            Every Detail Captured
          </h2>
        </div>

        {/* Masonry Grid */}
        <div
          ref={containerRef}
          className="grid gap-4 auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {gallery.images.map((image, index) => {
            // Create varied masonry layout
            const isLarge = index % 5 === 0 || index % 5 === 3;
            const colSpan = isLarge ? "col-span-2" : "col-span-1";

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${colSpan} ${
                  isLarge ? "row-span-2" : ""
                }`}
                onClick={() => onImageClick(index)}
              >
                <div className="relative h-64 md:h-80 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Glassmorphic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <div>
                      <p className="text-sm font-light text-white">
                        {image.caption || image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-foreground/20 rounded-full text-sm font-light uppercase tracking-widest transition-all hover:bg-foreground/5 hover:border-foreground/40">
            View Full Album
          </button>
        </div>
      </div>
    </section>
  );
};
