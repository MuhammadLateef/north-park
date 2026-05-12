"use client"

import Link from "next/link";
import HotelsCard from "./hostel-card";
import { destination1} from "@/app/Index";
import { StaticImageData } from "next/image";
import { Hotel1,Hotel2,Hotel3 } from "@/app/Index";
interface Hotel {
  id: string;
  title: string;
  location: string;
  image?: string|StaticImageData;
  price: number;
  description: string;
  rating: number;
  badge?: string;
}

const hotels: Hotel[] = [
  {
    id: "hunza-story-standard",
    title: "Hotel Hunza Story Standard",
    location: "Skardu",
    image: Hotel1.src,
    price: 10_000,
    rating: 4.6,
    description:
      "Relax in comfort with our thoughtfully designed Standard Rooms, offering cozy interiors and peaceful surroundings. Perfect for solo travelers or small families — all the essentials with breathtaking valley views.",
  },
  {
    id: "hunza-story-deluxe",
    title: "Hotel Hunza Story Deluxe",
    location: "Skardu",
    image: Hotel2.src,
    price: 14_000,
    rating: 4.8,
    badge: "Most Popular",
    description:
      "Step into elegance with our Deluxe Rooms, where comfort meets style. Spacious interiors, scenic windows, and modern conveniences — perfect for couples seeking a touch of mountain luxury.",
  },
  {
    id: "hunza-story-executive",
    title: "Hotel Hunza Story Executive",
    location: "Skardu",
    image: Hotel3.src,
    price: 22_000,
    rating: 5.0,
    badge: "Premium",
    description:
      "Indulge in a premium stay with refined interiors, elevated views, and top-tier amenities. Designed for travelers who appreciate space, comfort, and the raw sophistication of the Karakoram.",
  },
];

export default function HotelsSection() {
  return (
    <section className="hotels-section">
      {/* Background decoration */}
      <div className="hotels-bg-orb hotels-bg-orb--1" aria-hidden="true" />
      <div className="hotels-bg-orb hotels-bg-orb--2" aria-hidden="true" />

      <div className="hotels-container">
        {/* Header */}
        <header className="hotels-header">
          <span className="hotels-eyebrow">Accommodation</span>
          <h2 className="hotels-heading heading">
            Stay at{" "}
            <span className="hotels-heading-accent heading">Hotel Hunza Story</span>
          </h2>
          <p className="hotels-subheading">
            Handpicked rooms nestled in the heart of Skardu's majestic valleys —
            where every morning greets you with the Karakoram in full view.
          </p>
        </header>

        {/* Cards grid */}
        <div className="hotels-grid">
          {hotels.map((hotel) => (
            <HotelsCard key={hotel.id} hotels={hotel} />
          ))}
        </div>

        
      </div>

      <style jsx>{`
        /* ── Section wrapper ── */
        .hotels-section {
          position: relative;
          padding: 80px 0 100px;
          overflow: hidden;
          background: #f8fafc;
        }

        @media (min-width: 768px) {
          .hotels-section {
            padding: 100px 0 120px;
          }
        }

        /* ── Background decorations ── */
        .hotels-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }

        .hotels-bg-orb--1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(39, 174, 241, 0.1) 0%,
            transparent 70%
          );
          top: -150px;
          right: -100px;
        }

        .hotels-bg-orb--2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(13, 142, 204, 0.07) 0%,
            transparent 70%
          );
          bottom: -80px;
          left: -80px;
        }

        /* ── Container ── */
        .hotels-container {
          position: relative;
          z-index: 1;
          max-width: 85rem;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (min-width: 640px) {
          .hotels-container {
            padding: 0 32px;
          }
        }

        /* ── Header ── */
        .hotels-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .hotels-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #27aef1;
          background: rgba(39, 174, 241, 0.1);
          border: 1px solid rgba(39, 174, 241, 0.25);
          padding: 5px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
        }

        .hotels-heading {
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0 0 18px;
        }

        .hotels-heading-accent {
          background: linear-gradient(135deg, #27aef1 20%, #0d8ecc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hotels-subheading {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #64748b;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto;
        }

        /* ── Grid ── */
        .hotels-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }

        @media (min-width: 768px) {
          .hotels-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .hotels-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ── CTA ── */
        .hotels-cta {
          display: flex;
          justify-content: center;
          margin-top: 52px;
        }

        .hotels-view-all-link {
          text-decoration: none;
        }

        .hotels-view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #27aef1;
          background: #fff;
          border: 2px solid #27aef1;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.01em;
        }

        .hotels-view-all-btn:hover {
          background: linear-gradient(135deg, #27aef1 0%, #0d8ecc 100%);
          color: #fff;
          border-color: transparent;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 32px rgba(39, 174, 241, 0.35);
        }

        .hotels-view-all-btn:active {
          transform: scale(0.97);
        }
      `}</style>
    </section>
  );
}