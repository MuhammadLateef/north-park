"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GalleryItem } from "@/lib/gallery-data";
import { HeroSection } from "./hero-section";
import { SwiperGallery } from "./swiper-gallery";
import { MasonryGallery } from "./masonry-gallery";
import { ImageModal } from "./image-model";
import { ChevronLeft } from "lucide-react";

interface GalleryPageProps {
  gallery: GalleryItem;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ gallery }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const handleNextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % gallery.images.length);
  };

  const handlePrevImage = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + gallery.images.length) % gallery.images.length
    );
  };

  return (
    <>
      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-40 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md text-white font-light text-sm uppercase tracking-widest transition-all hover:bg-white/20"
      >
        <ChevronLeft className="h-4 w-4" />
        Back
      </Link>

      {/* Hero Section */}
      <HeroSection gallery={gallery} />

      {/* Swiper Gallery */}
      <SwiperGallery gallery={gallery} onImageClick={handleImageClick} />

      {/* Masonry Gallery */}
      <MasonryGallery gallery={gallery} onImageClick={handleImageClick} />

      {/* Image Modal */}
      <ImageModal
        gallery={gallery}
        imageIndex={selectedIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </>
  );
};
