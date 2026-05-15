export interface GalleryItem {
  slug: string;
  title: string;
  location: string;
  description: string;
  heroImage: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  tags: string[];
  featured: boolean;
  date: string;
}

export const galleryData: GalleryItem[] = [
  {
    slug: "everest-basecamp",
    title: "Everest Base Camp Trek",
    location: "Nepal",
    description:
      "A legendary trek to the foot of the world's highest mountain. Experience pristine Himalayan vistas, ancient monasteries, and the warmth of Sherpa hospitality.",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    images: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        alt: "Snow-capped mountain peaks",
        caption: "The majesty of the Himalayas",
      },
      {
        src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
        alt: "Mountain landscape at sunset",
        caption: "Golden hour in the mountains",
      },
      {
        src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
        alt: "Alpine meadow with wildflowers",
        caption: "Alpine meadows in bloom",
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        alt: "Mountain village at dusk",
        caption: "Sherpa village settlements",
      },
    ],
    tags: ["Mountain", "Trek", "Nepal", "Altitude"],
    featured: true,
    date: "2024-01-15",
  },
  {
    slug: "bali-temples",
    title: "Balinese Temple Odyssey",
    location: "Bali, Indonesia",
    description:
      "Discover the spiritual heart of Indonesia through its magnificent temples, traditional ceremonies, and serene landscapes that blend culture with nature.",
    heroImage:
      "https://images.unsplash.com/photo-1537225228614-b4fad34a0b60?w=1200&h=600&fit=crop",
    images: [
      {
        src: "https://images.unsplash.com/photo-1537225228614-b4fad34a0b60?w=800&h=600&fit=crop",
        alt: "Tanah Lot temple at sunset",
        caption: "Iconic Tanah Lot temple",
      },
      {
        src: "https://images.unsplash.com/photo-1552520206-7a73d9f92c4d?w=800&h=600&fit=crop",
        alt: "Traditional Balinese architecture",
        caption: "Ancient temple carvings",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        alt: "Temple gardens and grounds",
        caption: "Sacred temple grounds",
      },
      {
        src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
        alt: "Rice terraces of Bali",
        caption: "Emerald rice fields",
      },
    ],
    tags: ["Temple", "Culture", "Bali", "Spiritual"],
    featured: true,
    date: "2024-02-10",
  },
  {
    slug: "patagonia-wilderness",
    title: "Patagonia Adventure",
    location: "Argentina & Chile",
    description:
      "Explore the raw beauty of Patagonia with its dramatic peaks, turquoise lakes, and untamed wilderness. A paradise for adventurers and nature photographers.",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    images: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        alt: "Granite peaks of Patagonia",
        caption: "Torres del Paine peaks",
      },
      {
        src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
        alt: "Turquoise glacier lake",
        caption: "Glacial blue waters",
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        alt: "Patagonian wilderness",
        caption: "Untamed wilderness",
      },
      {
        src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
        alt: "Mountain landscape",
        caption: "Dramatic mountain vistas",
      },
    ],
    tags: ["Mountain", "Wilderness", "Argentina", "Adventure"],
    featured: true,
    date: "2024-03-05",
  },
  {
    slug: "iceland-waterfalls",
    title: "Iceland's Golden Circle",
    location: "Iceland",
    description:
      "Experience Iceland's otherworldly landscapes featuring powerful waterfalls, geothermal wonders, and volcanic terrain that feels like another planet.",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    images: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        alt: "Powerful waterfall",
        caption: "Skógafoss waterfall",
      },
      {
        src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
        alt: "Geothermal hot springs",
        caption: "Blue Lagoon geothermal spa",
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        alt: "Black sand beaches",
        caption: "Volcanic black sand",
      },
      {
        src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
        alt: "Aurora borealis",
        caption: "Northern lights magic",
      },
    ],
    tags: ["Waterfall", "Geothermal", "Iceland", "Nature"],
    featured: true,
    date: "2024-04-12",
  },
  {
    slug: "iceland-waterfalls-kharmang",
    title: "Iceland's Golden Circle",
    location: "Iceland",
    description:
      "Experience Iceland's otherworldly landscapes featuring powerful waterfalls, geothermal wonders, and volcanic terrain that feels like another planet.",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    images: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        alt: "Powerful waterfall",
        caption: "Skógafoss waterfall",
      },
      {
        src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
        alt: "Geothermal hot springs",
        caption: "Blue Lagoon geothermal spa",
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        alt: "Black sand beaches",
        caption: "Volcanic black sand",
      },
      {
        src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
        alt: "Aurora borealis",
        caption: "Northern lights magic",
      },
       {
        src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
        alt: "Aurora borealis",
        caption: "Northern lights magic",
      },
    ],
    tags: ["Waterfall", "Geothermal", "Iceland", "Nature"],
    featured: true,
    date: "2024-04-12",
  },
];

export function getGalleryItem(slug: string): GalleryItem | undefined {
  return galleryData.find((item) => item.slug === slug);
}

export function getFeaturedGalleries(): GalleryItem[] {
  return galleryData.filter((item) => item.featured);
}
