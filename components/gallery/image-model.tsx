"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { GalleryItem } from "@/lib/gallery-data";

interface ImageModalProps {
  gallery: GalleryItem;
  imageIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  gallery,
  imageIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const image = gallery.images[imageIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      // Animate backdrop
      gsap.fromTo(
        ".modal-backdrop",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animate image container
      gsap.fromTo(
        ".modal-image-container",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out" }
      );
    }
  }, [isOpen, imageIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-2 backdrop-blur-md transition-all hover:bg-white/20"
      >
        <X className="h-6 w-6 text-white" />
      </button>

      {/* Modal Content */}
      <div
        className="modal-image-container relative h-[80vh] w-[90vw] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          priority
        />

        {/* Image Info */}
        {image.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <p className="text-lg font-light text-white">{image.caption}</p>
            <p className="mt-2 text-sm font-light text-white/70">{image.alt}</p>
          </div>
        )}

        {/* Navigation */}
        {gallery.images.length > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-md transition-all hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-md transition-all hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 right-6 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
              <p className="text-sm font-light text-white">
                {String(imageIndex + 1).padStart(2, "0")} /{" "}
                {String(gallery.images.length).padStart(2, "0")}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Keyboard Hints */}
      <div className="absolute bottom-6 left-6 space-y-1 text-xs font-light text-white/50">
        <p>↑ ESC to close</p>
        <p>← → to navigate</p>
      </div>
    </div>
  );
};
