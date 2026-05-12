"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin, Star, Moon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
// import BookingForm from "../bookingform/booking-form";

interface Hotel {
  id: string;
  title: string;
  location: string;
  image?: string | StaticImageData;
  price: number;
  description: string;
  rating?: number;
  badge?: string;
}

interface HotelsCardProps {
  hotels: Hotel;
}

function HotelsCard({ hotels }: HotelsCardProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState<boolean>(false);
//   const [showBookingForm, setShowBookingForm] = useState<boolean>(false);

  const handleCardClick = (): void => {
    router.push(`/hotels/${hotels.id}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick();
    }
  };

//   const handleBookNow = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     e.stopPropagation();
//     setShowBookingForm(true);
//   };

  const rating = hotels.rating ?? 4.8;
  const badge = hotels.badge ?? null;

  return (
    <>
      {/* <BookingForm
        showBookingForm={showBookingForm}
        onclose={() => setShowBookingForm(false)}
      /> */}

      <div
        className="hotels-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={handleKeyDown}
        onClick={handleCardClick}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${hotels.title} in ${hotels.location}`}
      >
        {/* Image Container */}
        <div className="card-image-wrapper">
          <Image
            src={hotels.image || "/placeholder.svg"}
            alt={`${hotels.title} - ${hotels.location}`}
            fill
            className={`card-image ${isHovered ? "card-image-zoomed" : ""}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient overlay always present */}
          <div className="card-gradient-overlay" />

          {/* Hover overlay */}
          <div className={`card-hover-overlay ${isHovered ? "visible" : ""}`} />

          {/* Top badges row */}
          <div className="card-top-row">
            {badge && <span className="card-badge">{badge}</span>}
            <div className="card-rating">
              <Star size={12} fill="#F5C842" color="#F5C842" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Location chip at bottom of image */}
          <div className="card-location-chip">
            <MapPin size={13} />
            <span>{hotels.location}</span>
          </div>
        </div>

        {/* Content */}
        <div className="card-content">
          <h3 className="card-title">{hotels.title}</h3>
          <p className="card-description">{hotels.description}</p>

          <div className="card-divider" />

          <div className="card-footer">
            <div className="card-price-block">
              <span className="card-price">
                {hotels.price.toLocaleString()}
              </span>
              <span className="card-price-label">PKR / night</span>
            </div>
            <button
              className="card-book-btn"
             
              aria-label={`Book ${hotels.title}`}
            >
              Book Now
              <ArrowRight size={16} className="btn-arrow" />
            </button>
          </div>
        </div>

        <style jsx>{`
          .hotels-card {
            position: relative;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.35s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            outline: none;
            display: flex;
            flex-direction: column;
          }

          .hotels-card:hover {
            transform: translateY(-6px) scale(1.01);
            box-shadow: 0 20px 50px rgba(39, 174, 241, 0.18),
              0 8px 20px rgba(0, 0, 0, 0.1);
          }

          .hotels-card:focus-visible {
            box-shadow: 0 0 0 3px #27aef1, 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          /* ── Image ── */
          .card-image-wrapper {
            position: relative;
            height: 220px;
            overflow: hidden;
            flex-shrink: 0;
          }

          @media (min-width: 640px) {
            .card-image-wrapper {
              height: 260px;
            }
          }

          .card-image {
            object-fit: cover;
            transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .card-image-zoomed {
            transform: scale(1.08);
          }

          .card-gradient-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to bottom,
              transparent 40%,
              rgba(0, 0, 0, 0.55) 100%
            );
            pointer-events: none;
          }

          .card-hover-overlay {
            position: absolute;
            inset: 0;
            background: rgba(39, 174, 241, 0.12);
            opacity: 0;
            transition: opacity 0.35s ease;
            pointer-events: none;
          }

          .card-hover-overlay.visible {
            opacity: 1;
          }

          /* ── Top row ── */
          .card-top-row {
            position: absolute;
            top: 14px;
            left: 14px;
            right: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .card-badge {
            background: linear-gradient(135deg, #27aef1, #0d8ecc);
            color: #fff;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            padding: 4px 10px;
            border-radius: 20px;
          }

          .card-rating {
            display: flex;
            align-items: center;
            gap: 4px;
            background: rgba(0, 0, 0, 0.55);
            backdrop-filter: blur(6px);
            color: #fff;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 20px;
            margin-left: auto;
          }

          /* ── Location chip ── */
          .card-location-chip {
            position: absolute;
            bottom: 12px;
            left: 14px;
            display: flex;
            align-items: center;
            gap: 5px;
            background: rgba(255, 255, 255, 0.18);
            backdrop-filter: blur(8px);
            color: #fff;
            font-size: 0.75rem;
            font-weight: 500;
            padding: 4px 10px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.25);
          }

          /* ── Content ── */
          .card-content {
            padding: 20px 22px 22px;
            display: flex;
            flex-direction: column;
            flex: 1;
          }

          .card-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 10px;
            line-height: 1.3;
            letter-spacing: -0.01em;
          }

          @media (min-width: 640px) {
            .card-title {
              font-size: 1.2rem;
            }
          }

          .card-description {
            font-size: 0.855rem;
            color: #64748b;
            line-height: 1.65;
            margin: 0;
            flex: 1;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .card-divider {
            height: 1px;
            background: linear-gradient(
              to right,
              transparent,
              #e2e8f0,
              transparent
            );
            margin: 16px 0;
          }

          .card-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }

          .card-price-block {
            display: flex;
            flex-direction: column;
          }

          .card-price {
            font-size: 1.4rem;
            font-weight: 800;
            color: #0f172a;
            letter-spacing: -0.02em;
            line-height: 1.1;
          }

          .card-price-label {
            font-size: 0.72rem;
            color: #94a3b8;
            font-weight: 500;
            margin-top: 2px;
          }

          /* ── Book button ── */
          .card-book-btn {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 0.875rem;
            font-weight: 600;
            color: #fff;
            background: linear-gradient(135deg, #27aef1 0%, #0d8ecc 100%);
            border: none;
            cursor: pointer;
            transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.2s ease, filter 0.2s ease;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .card-book-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(39, 174, 241, 0.4);
            filter: brightness(1.05);
          }

          .card-book-btn:active {
            transform: scale(0.97);
          }

          .btn-arrow {
            transition: transform 0.2s ease;
          }

          .card-book-btn:hover .btn-arrow {
            transform: translateX(3px);
          }
        `}</style>
      </div>
    </>
  );
}

export default HotelsCard;