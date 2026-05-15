"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GalleryItem } from "@/lib/gallery-data";
import { ArrowRight } from "lucide-react";

interface GalleryGridProps {
  galleries: GalleryItem[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ galleries }) => {
  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-light uppercase tracking-widest text-accent">
            Explore Destinations
          </p>
          <h2 className="text-4xl font-light md:text-5xl">
            Featured Collections
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {galleries.map((gallery) => (
            <Link key={gallery.slug} href={`/gallery/${gallery.slug}`}>
              <div className="group relative h-96 overflow-hidden rounded-3xl cursor-pointer">
                {/* Background Image */}
                <Image
                  src={gallery.heroImage}
                  alt={gallery.title}
                  width={200}
                  height={200}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 transition-all duration-300 group-hover:from-black/40 group-hover:to-black/70" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white">
                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {gallery.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-light uppercase tracking-widest backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title and Location */}
                  <h3 className="text-3xl font-light leading-tight">
                    {gallery.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-white/80">
                    {gallery.location}
                  </p>

                  {/* Arrow Icon (appears on hover) */}
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-light uppercase tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
