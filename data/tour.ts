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

export interface Tour {
  id: string
  title: string| string[]
  location: string
  rating: number
  price: number
  heroImage:string | StaticImageData
  description: string
  detailedDescription: string
  planYourVisit: PlanYourVisit
  activities: Activity[]
  gallery: StaticImageData[] | string[]
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
      "Deosai National Park is one of Pakistan’s most awe-inspiring natural wonders.",

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
      "Journey to the base camp of the world’s second-highest mountain.",

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