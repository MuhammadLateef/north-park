"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import { Img1,Img2,Img3,Img4,Img5 , Img6} from "@/app/Index";
import { image } from "framer-motion/client";
// ─── Slide Data ───────────────────────────────────────────────────────────────

const slides = [
  {
    id: "s1",
    location: "Hunza Valley, Pakistan",
    title: "Where Heaven\nMeets Earth",
    subtitle: "Explore the ancient Silk Road corridors and glacial lakes of the Karakoram.",
    // image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    image:Img4,
    tag: "7 Days · Group Tour",
  },
  {
    id: "s2",
    location: "Fairy Meadows, Pakistan",
    title: "Camp Under\nNanga Parbat",
    subtitle: "Sleep at the foot of the world's ninth-highest peak in a meadow straight from legend.",
    // image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
      image:Img6,
    tag: "5 Days · Trekking",
  },
  {
    id: "s3",
    location: "Skardu, Pakistan",
    title: "Turquoise Lakes\n& Desert Dunes",
    subtitle: "Discover Shangrila Resort, Satpara Lake, and the cold desert of Skardu.",
    // image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80",
      image:Img3,
    tag: "6 Days · Adventure",
  },
 
];

// ─── Framer Motion Variants ───────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  show:  { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
  exit:  { transition: { staggerChildren: 0.07, staggerDirection: -1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0,   transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -16, transition: { duration: 0.3, ease: "easeIn" } },
};

const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5 } },
  exit:   { opacity: 0, transition: { duration: 0.25 } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  // Store the whole slide object — not just index — to avoid stale state bugs
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative h-screen min-h-[580px] max-h-[900px] w-full overflow-hidden">

      {/* ── Background Swiper ──────────────────────────────────────────────
          IMPORTANT: loop={false} — with loop:true Swiper clones slides
          internally which breaks activeIndex and makes text disappear    */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1200}
        loop={false}
        className="absolute inset-0 h-full w-full"
        onSwiper={(s) => { swiperRef.current = s; }}
        onSlideChange={(s) => {
          const found = slides[s.activeIndex];
          if (found) setActiveSlide(found);
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image.src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Gradient Overlays ─────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* ── Text Content ───────────────────────────────────────────────────
          Lives OUTSIDE Swiper so it is never touched by Swiper's DOM.
          key={activeSlide.id} triggers AnimatePresence re-mount on change */}
      <div className="absolute inset-0 z-20 flex items-center pb-24 md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="max-w-2xl"
            >
              {/* Location pill */}
              <motion.div variants={fadeOnly} className="mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <MapPin className="h-3 w-3 text-emerald-400" />
                  {activeSlide.location}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="mb-4 whitespace-pre-line text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {activeSlide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="mb-8 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg"
              >
                {activeSlide.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                <button className="group flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-emerald-400 active:scale-95">
                  Explore Tour
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">
                  View All Tours
                </button>
              </motion.div>

              {/* Tag */}
              <motion.p variants={fadeOnly} className="mt-6 text-xs uppercase tracking-widest text-white/50">
                {activeSlide.tag}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Prev / Next + Counter ─────────────────────────────────────────── */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-3 md:right-10">
        <span className="text-sm font-semibold text-white/60">
          <span className="text-white">
            {String(slides.findIndex((s) => s.id === activeSlide.id) + 1).padStart(2, "0")}
          </span>
          {" / "}
          {String(slides.length).padStart(2, "0")}
        </span>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* ── Vertical dot nav (desktop only) ─────────────────────────────── */}
      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 md:flex md:right-10">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => swiperRef.current?.slideTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              slide.id === activeSlide.id
                ? "h-8 w-1.5 bg-emerald-400"
                : "h-1.5 w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}