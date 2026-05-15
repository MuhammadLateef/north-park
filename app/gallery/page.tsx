import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { getFeaturedGalleries } from "@/lib/gallery-data";

export default function Home() {
  const galleries = getFeaturedGalleries();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 text-center">
          <div className="space-y-4">
            <p className="text-sm font-light uppercase tracking-widest text-accent">
              Curated Experiences
            </p>
            <h1 className="text-balance text-5xl font-light md:text-7xl leading-tight">
              Premium Travel &<br />
              Trekking Gallery
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light text-foreground/70">
              Immerse yourself in breathtaking destinations and extraordinary
              moments captured from around the world.
            </p>
          </div>

          {/* CTA Button */}
          <button className="mt-8 px-8 py-3 border border-foreground/20 rounded-full text-sm font-light uppercase tracking-widest transition-all hover:bg-foreground/5 hover:border-foreground/40">
            Explore Collections
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs font-light uppercase tracking-widest text-foreground/50">
            Scroll
          </p>
          <div className="h-1 w-0.5 rounded-full bg-foreground/30" />
        </div>
      </section>

      {/* Gallery Grid */}
      <GalleryGrid galleries={galleries} />

      {/* Footer */}
      <footer className="border-t border-foreground/10 bg-background py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-lg font-light">Travel Gallery</h3>
            <p className="mt-2 text-sm font-light text-foreground/60">
              Showcasing the world&apos;s most beautiful destinations.
            </p>
          </div>
          <div className="flex gap-8 text-sm font-light">
            <a href="#" className="transition-colors hover:text-accent">
              About
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Contact
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Gallery
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-foreground/10 pt-8 text-center text-xs font-light text-foreground/50">
          <p>&copy; 2024 Premium Travel Gallery. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
