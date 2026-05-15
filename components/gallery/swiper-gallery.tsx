"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GalleryItem } from "@/lib/gallery-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwiperGalleryProps {
  gallery: GalleryItem;
  onImageClick: (index: number) => void;
}

export const SwiperGallery: React.FC<SwiperGalleryProps> = ({
  gallery,
  onImageClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-background py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-light uppercase tracking-widest text-accent">
            Gallery Highlights
          </p>
          <h2 className="text-4xl font-light md:text-5xl">
            Featured Moments
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full"
          >
            {gallery.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative h-64 cursor-pointer overflow-hidden rounded-2xl group"
                  onClick={() => onImageClick(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="space-y-2">
                      <p className="text-sm font-light text-white/90">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 rounded-full bg-white/10 p-2 backdrop-blur-md transition-all hover:bg-white/20 md:flex hidden"
            onClick={() => (document.querySelector(".swiper")as any)?.swiper?.slidePrev()}
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white/10 p-2 backdrop-blur-md transition-all hover:bg-white/20 md:flex hidden"
            onClick={() => (document.querySelector(".swiper")as any)?.swiper?.slideNext()}
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Image Counter */}
        <div className="mt-8 text-center">
          <p className="text-sm font-light text-foreground/60">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(gallery.images.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
};
