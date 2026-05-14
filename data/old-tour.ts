import type { StaticImageData } from "next/image"

import {
  destination1,
  destination2,
  destination3,
} from "@/app/Index"

/* =========================
   TYPES
========================= */

export interface Activity {
  icon: string
  title: string
  description: string
}

export interface PlanYourVisit {
  location: string
  bestTimeToVisit: string
  weather: string
}

export interface ItineraryDay {
  day: number
  title: string
  activities: string[]
  overnight: string
}

export interface Tour {
  id: string
  title: string
  location: string
  rating: number
  price: number
  heroImage: string | StaticImageData
  description: string
  detailedDescription: string
  highlights?: string[]
  planYourVisit: PlanYourVisit
  activities: Activity[]
  gallery: StaticImageData[] | string[]
  itinerary?: ItineraryDay[]
  mainAttractions?: string[]
}

/* =========================
   TOUR DATA
========================= */

export const tourData: Tour[] = [
  {
    id: "shangrila-skardu",
    title: "Shangrila Skardu",
    location: "Skardu, Gilgit Baltistan",
    rating: 5,
    price: 299,
    heroImage: destination1.src,

    description:
      "Discover breathtaking destinations, expert-led treks, and unforgettable adventures — tailored just for you.",

    detailedDescription:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

    planYourVisit: {
      location: "Skardu, Gilgit Baltistan",
      bestTimeToVisit: "June to September",
      weather: "16°C - 25°C during summer",
    },

    activities: [
      {
        icon: "swimming",
        title: "Swimming",
        description: "Crystal clear waters perfect for swimming",
      },
      {
        icon: "hiking",
        title: "Hiking",
        description: "Scenic trails around the lake",
      },
      {
        icon: "photography",
        title: "Photography",
        description: "Stunning landscape photo opportunities",
      },
      {
        icon: "fishing",
        title: "Fishing",
        description: "Traditional fishing experiences",
      },
    ],

    gallery: [destination1.src, destination1.src, destination1.src],
  },

  {
    id: "upper-kachura-lake",
    title: "Upper Kachura Lake",
    location: "Skardu, Gilgit Baltistan",
    rating: 4.8,
    price: 199,
    heroImage: destination2.src,

    description:
      "Experience the majestic beauty of ancient architecture surrounded by stunning mountain landscapes.",

    detailedDescription:
      "Upper Kachura Lake is one of the most beautiful and serene lakes in Pakistan.",

    planYourVisit: {
      location: "Skardu, Gilgit Baltistan",
      bestTimeToVisit: "May to October",
      weather: "12°C - 22°C during summer",
    },

    activities: [
      {
        icon: "boating",
        title: "Boating",
        description: "Peaceful boat rides on crystal waters",
      },
      {
        icon: "camping",
        title: "Camping",
        description: "Lakeside camping under the stars",
      },
    ],

    gallery: [destination2.src, destination2.src, destination2.src],
  },

  {
    id: "fairy-meadows",
    title: "Fairy Meadows",
    location: "Gilgit, Gilgit Baltistan",
    rating: 4.9,
    price: 299,
    heroImage: destination3.src,

    description:
      "Discover breathtaking destinations, expert-led treks, and unforgettable adventures.",

    detailedDescription:
      "Fairy Meadows is a lush green plateau offering breathtaking views of Nanga Parbat.",

    planYourVisit: {
      location: "Gilgit, Gilgit Baltistan",
      bestTimeToVisit: "June to September",
      weather: "16°C - 25°C during summer",
    },

    activities: [
      {
        icon: "hiking",
        title: "Hiking",
        description: "Scenic trekking routes",
      },
    ],

    gallery: [destination3.src, destination3.src, destination3.src],
  },

  {
    id: "skardu-tours",
    title: "Skardu Tour",
    location: "Skardu, Gilgit Baltistan",
    rating: 4.8,
    price: 159,
    heroImage: destination1.src,

    description:
      "Luxury accommodations in a historic setting with world-class amenities.",

    detailedDescription:
      "Skardu is a stunning valley surrounded by mountains and crystal-clear lakes.",

    planYourVisit: {
      location: "Skardu, Gilgit Baltistan",
      bestTimeToVisit: "April to November",
      weather: "18°C - 28°C during summer",
    },

    activities: [
      {
        icon: "heritage",
        title: "Heritage Tours",
        description: "Guided tours of historical significance",
      },
    ],

    gallery: [destination1.src, destination1.src, destination1.src],
  },

  {
    id: "deosai-tours",
    title: "Deosai Trek Tours",
    location: "Skardu, Gilgit Baltistan",
    rating: 4.8,
    price: 159,
    heroImage: destination1.src,

    description:
      "Explore the Land of Giants with endless grasslands and wildlife.",

    detailedDescription:
      "Deosai National Park is one of Pakistan's most awe-inspiring natural wonders.",

    planYourVisit: {
      location: "Skardu, Gilgit Baltistan",
      bestTimeToVisit: "April to November",
      weather: "18°C - 28°C during summer",
    },

    activities: [
      {
        icon: "photography",
        title: "Photography",
        description: "Capture historic and scenic beauty",
      },
    ],

    gallery: [destination1.src, destination1.src, destination1.src],
  },

  {
    id: "naltar-valley",
    title: "Naltar Valley",
    location: "Gilgit, Gilgit Baltistan",
    rating: 4.8,
    price: 159,
    heroImage: destination1.src,

    description:
      "Discover colorful lakes and snow-covered peaks in Naltar Valley.",

    detailedDescription:
      "Naltar Valley is famous for its forests, lakes, and ski resort.",

    planYourVisit: {
      location: "Gilgit, Gilgit Baltistan",
      bestTimeToVisit: "April to November",
      weather: "18°C - 28°C during summer",
    },

    activities: [
      {
        icon: "skiing",
        title: "Skiing",
        description: "Winter ski adventures",
      },
    ],

    gallery: [destination1.src, destination1.src, destination1.src],
  },

  {
    id: "bilamik-valley",
    title: "Bilamik Valley",
    location: "Skardu, Gilgit Baltistan",
    rating: 4.8,
    price: 159,
    heroImage: destination1.src,

    description:
      "A hidden paradise with lush meadows and waterfalls.",

    detailedDescription:
      "Bilamik Valley offers scenic jeep tracks and untouched nature.",

    planYourVisit: {
      location: "Skardu, Gilgit Baltistan",
      bestTimeToVisit: "April to November",
      weather: "18°C - 28°C during summer",
    },

    activities: [
      {
        icon: "camping",
        title: "Camping",
        description: "Outdoor camping adventures",
      },
    ],

    gallery: [destination1.src, destination1.src, destination1.src],
  },

  {
    id: "k2-basecamp-trek",
    title: "K2 Base Camp",
    location: "Skardu, Gilgit Baltistan",
    rating: 4.8,
    price: 159,
    heroImage: destination1.src,

    description:
      "Journey to the base camp of the world's second-highest mountain.",

    detailedDescription:
      "K2 Base Camp is a dream destination for trekkers worldwide.",

    planYourVisit: {
      location: "Skardu, Gilgit Baltistan",
      bestTimeToVisit: "April to November",
      weather: "18°C - 28°C during summer",
    },

    activities: [
      {
        icon: "trekking",
        title: "Trekking",
        description: "High-altitude trekking experience",
      },
    ],

    gallery: [destination1.src, destination1.src, destination1.src],
  },

  {
    id: "minimarg-domail",
    title: "Minimarg Domail",
    location: "Astore, Gilgit Baltistan",
    rating: 4.8,
    price: 159,
    heroImage: destination1.src,

    description:
      "Untouched valleys surrounded by forests and crystal-clear streams.",

    detailedDescription:
      "Minimarg and Domail are hidden gems known for peaceful landscapes.",

    planYourVisit: {
      location: "Astore, Gilgit Baltistan",
      bestTimeToVisit: "April to November",
      weather: "18°C - 28°C during summer",
    },

    activities: [
      {
        icon: "nature",
        title: "Nature Exploration",
        description: "Explore untouched valleys and lakes",
      },
    ],

    gallery: [destination1.src, destination1.src, destination1.src],
  },

  // ── NEW TOUR ──────────────────────────────────────────────────────────────
  {
    id: "skardu-astore-tour",
    title: "Skardu & Astore Tour",
    location: "Skardu & Astore, Gilgit Baltistan",
    rating: 4.9,
    price: 499,
    heroImage: destination1.src,

    description:
      "Discover the hidden treasures of Northern Pakistan on a 9-day adventure through majestic mountains, alpine lakes, historic forts, and remote valleys.",

    detailedDescription:
      "Embark on a 9-day adventure through the breathtaking landscapes of Gilgit-Baltistan, exploring the majestic mountains, alpine lakes, historic forts, and remote valleys of Skardu and Astore. From the crystal-clear waters of Upper and Lower Kachura Lakes to the sweeping grasslands of Deosai National Park and the dramatic views of Nanga Parbat from Rama Meadows, this tour is designed for travellers who want to experience the very best of Pakistan's north.",

    highlights: [
      "Explore Skardu's iconic attractions: Upper Kachura Lake, Lower Kachura Lake, and Sarfaranga Cold Desert",
      "Visit historic landmarks: Shigar Fort, Khaplu Fort, and Skardu Fort",
      "Experience the natural beauty of Basho Valley, Deosai National Park, and Rama Meadows",
      "Witness the stunning views of Nanga Parbat and the picturesque Astore Valley",
    ],

    planYourVisit: {
      location: "Skardu & Astore, Gilgit Baltistan",
      bestTimeToVisit: "June to September",
      weather: "12°C - 25°C during summer",
    },

    activities: [
      {
        icon: "hiking",
        title: "Hiking",
        description: "Trek to Rama Lake with views of Nanga Parbat",
      },
      {
        icon: "photography",
        title: "Photography",
        description: "Capture dramatic landscapes and historic forts",
      },
      {
        icon: "heritage",
        title: "Heritage Tours",
        description: "Explore Shigar Fort, Khaplu Fort & Skardu Fort",
      },
      {
        icon: "nature",
        title: "Wildlife & Nature",
        description: "Spot Himalayan brown bears in Deosai National Park",
      },
    ],

    gallery: [destination1.src, destination2.src, destination3.src],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Skardu",
        activities: [
          "Arrive at Skardu Airport",
          "Transfer to hotel",
          "Visit Upper Kachura Lake and Lower Kachura Lake",
        ],
        overnight: "Skardu",
      },
      {
        day: 2,
        title: "Skardu City Tour",
        activities: [
          "Visit Shigar Fort",
          "Explore Sarfaranga Cold Desert",
          "Tour Skardu Fort",
        ],
        overnight: "Skardu",
      },
      {
        day: 3,
        title: "Basho Valley",
        activities: [
          "Day trip to Basho Valley",
          "Explore lush green meadows and streams",
        ],
        overnight: "Skardu",
      },
      {
        day: 4,
        title: "Khaplu Valley",
        activities: [
          "Drive to Khaplu Valley (3–4 hours)",
          "Visit Khaplu Fort",
          "Explore local village",
        ],
        overnight: "Khaplu or Skardu",
      },
      {
        day: 5,
        title: "Skardu → Deosai → Astore",
        activities: [
          "Drive through Deosai National Park",
          "Visit Sheosar Lake",
          "Continue to Astore Valley",
        ],
        overnight: "Astore",
      },
      {
        day: 6,
        title: "Rama Meadows",
        activities: [
          "Visit Rama Meadows",
          "Hike to Rama Lake",
          "Panoramic views of Nanga Parbat",
        ],
        overnight: "Astore",
      },
      {
        day: 7,
        title: "Explore Astore Valley",
        activities: [
          "Explore Astore Valley",
          "Optional visit to Minimarg Valley",
        ],
        overnight: "Astore",
      },
      {
        day: 8,
        title: "Astore → Skardu",
        activities: [
          "Drive back to Skardu",
          "Relax or visit local bazaar",
        ],
        overnight: "Skardu",
      },
      {
        day: 9,
        title: "Departure",
        activities: [
          "Transfer to Skardu Airport",
          "Fly to Islamabad",
        ],
        overnight: "—",
      },
    ],

    mainAttractions: [
      "Skardu Lakes & Cold Desert",
      "Basho Valley",
      "Khaplu Valley",
      "Deosai National Park",
      "Rama Meadows & Rama Lake",
    ],
  },
]

/* =========================
   HELPERS
========================= */

export const getTourById = (
  id: string
): Tour | undefined => {
  return tourData.find((tour) => tour.id === id)
}

export const getAllTourIds = (): string[] => {
  return tourData.map((tour) => tour.id)
}