import type { StaticImageData } from "next/image"

import {
  destination1,
  destination2,
  destination3,

  Trek1,
Trek2,
Trek3,
Trek4,
Trek5,
Trek6,
Trek7,
Trek8,
Trek9,
Trek10,
Trek11,
Trek12,


Tour1,
Tour2,
Tour3,
Tour4,
Tour5,
Tour6,
Tour7,
Tour8,
Tour9,
Tour10,
Tour11,
Tour12,
Tour13,
Tour14,
Tour15,
Tour16,
Tour17,
Tour18,
Tour19,
Tour20,
Tour21,
Tour22,
Tour23,
Tour24,
Tour25,
Tour26,
Tour27,
Tour28
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

  // ── NEW TOUR ──────────────────────────────────────────────────────────────
  {
    id: "skardu-astore-tour",
    title: "9 days Skardu & Astore Tour",
    location: "Skardu & Astore, Gilgit Baltistan",
    rating: 4.9,
    price: 499,
    heroImage: Tour4.src,

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

    gallery: [Tour4.src, destination2.src, destination3.src],

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

  {
    id: "hunza-skardu-jeep-safari",
    title: "12-Day Jeep Safari Adventure: Hunza to Skardu",
    location: "Hunza & Skardu, Gilgit Baltistan",
    rating: 5,
    price: 799,
    heroImage: Tour26.src,

    description:
      "Embark on an exhilarating 12-day jeep safari through Hunza, Shimshal, and Skardu with breathtaking mountain landscapes and adventure-filled experiences.",

    detailedDescription:
      "This adventure-packed tour takes you through the rugged mountain roads, picturesque valleys, and iconic landmarks of Hunza and Skardu. Explore historic forts, pristine lakes, Deosai National Park, and the thrilling jeep tracks of Shimshal Valley.",

    highlights: [
      "Explore Hunza Valley including Baltit Fort, Altit Fort, and Duikar View Point",
      "Visit Attabad Lake, Passu Cones, and Khunjerab Pass",
      "Experience the adventurous Shimshal Valley jeep safari",
      "Discover Skardu attractions including Shangrila Resort and Deosai National Park",
    ],

    planYourVisit: {
      location: "Hunza & Skardu, Gilgit Baltistan",
      bestTimeToVisit: "May to October",
      weather: "10°C - 25°C during summer",
    },

    activities: [
      {
        icon: "jeep",
        title: "Jeep Safari",
        description: "Thrilling off-road mountain adventures",
      },
      {
        icon: "photography",
        title: "Photography",
        description: "Capture stunning mountain landscapes",
      },
      {
        icon: "hiking",
        title: "Hiking",
        description: "Explore scenic valleys and trails",
      },
    ],

    gallery: [Tour25.src, Tour27.src, destination3.src],

    itinerary: [
      {
        day: 1,
        title: "Islamabad → Chilas",
        activities: [
          "Drive via Karakoram Highway",
          "Stop at Nanga Parbat View Point",
        ],
        overnight: "Chilas",
      },
      {
        day: 2,
        title: "Chilas → Hunza",
        activities: [
          "Drive to Gilgit and Hunza",
          "Stop at Rakaposhi View Point",
        ],
        overnight: "Karimabad",
      },
      {
        day: 3,
        title: "Hunza Sightseeing",
        activities: [
          "Visit Baltit Fort and Altit Fort",
          "Sunset at Duikar View Point",
        ],
        overnight: "Hunza",
      },
      {
        day: 4,
        title: "Upper Hunza",
        activities: [
          "Visit Attabad Lake",
          "Explore Passu Cones",
          "Walk on Hussaini Suspension Bridge",
        ],
        overnight: "Passu",
      },
      {
        day: 5,
        title: "Khunjerab Pass",
        activities: [
          "Jeep drive to Khunjerab Pass",
          "Explore Khunjerab National Park",
        ],
        overnight: "Hunza",
      },
      {
        day: 6,
        title: "Hunza → Shimshal Valley",
        activities: [
          "Jeep safari to Shimshal Valley",
        ],
        overnight: "Shimshal",
      },
      {
        day: 7,
        title: "Shimshal → Gilgit",
        activities: [
          "Return from Shimshal",
          "Explore Gilgit Bazaar",
        ],
        overnight: "Gilgit",
      },
      {
        day: 8,
        title: "Gilgit → Skardu",
        activities: [
          "Drive along Indus River",
          "Stop at Jaglot",
        ],
        overnight: "Skardu",
      },
      {
        day: 9,
        title: "Skardu Local Tour",
        activities: [
          "Visit Shangrila Resort",
          "Explore Upper Kachura Lake and Skardu Fort",
        ],
        overnight: "Skardu",
      },
      {
        day: 10,
        title: "Deosai Jeep Safari",
        activities: [
          "Visit Deosai National Park",
          "Explore Sheosar Lake",
        ],
        overnight: "Skardu",
      },
      {
        day: 11,
        title: "Shigar Valley",
        activities: [
          "Explore Shigar Valley",
          "Visit Shigar Fort",
        ],
        overnight: "Shigar",
      },
      {
        day: 12,
        title: "Return to Islamabad",
        activities: [
          "Flight or road journey back to Islamabad",
        ],
        overnight: "—",
      },
    ],

    mainAttractions: [
      "Hunza Valley",
      "Attabad Lake",
      "Khunjerab Pass",
      "Shimshal Valley",
      "Deosai National Park",
    ],
  },

  {
    id: "hunza-shandur-festival",
    title: "14-Day Hunza and Shandur Festival Tour",
    location: "Hunza, Gilgit & Shandur",
    rating: 4.9,
    price: 0o0,
    heroImage: Tour23.src,

    description:
      "Experience the world's highest polo festival and explore the breathtaking beauty of Gilgit-Baltistan on this unforgettable 14-day adventure.",

    detailedDescription:
      "Witness the excitement of the Shandur Polo Festival while exploring Gilgit, Phander Valley, Hunza, and surrounding cultural and natural attractions across northern Pakistan.",

    highlights: [
      "Witness the world's highest polo match at Shandur Polo Ground",
      "Explore Phander Valley, Khalti Lake, and Hunza Valley",
      "Experience traditional music, dance, and local culture",
      "Visit Baltit Fort, Altit Fort, and Duikar View Point",
    ],

    planYourVisit: {
      location: "Gilgit Baltistan",
      bestTimeToVisit: "July",
      weather: "12°C - 24°C during summer",
    },

    activities: [
      {
        icon: "festival",
        title: "Polo Festival",
        description: "Enjoy traditional polo matches at Shandur",
      },
      {
        icon: "camping",
        title: "Camping",
        description: "Camp at Shandur Polo Ground",
      },
      {
        icon: "culture",
        title: "Cultural Exploration",
        description: "Experience local traditions and food",
      },
    ],

    gallery: [Tour24.src, Tour26.src, Tour20.src],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad",
        activities: [
          "Transfer to hotel",
        ],
        overnight: "Islamabad",
      },
      {
        day: 2,
        title: "Islamabad → Gilgit",
        activities: [
          "Fly to Gilgit",
          "Explore Gilgit Bazaar",
        ],
        overnight: "Gilgit",
      },
      {
        day: 3,
        title: "Gilgit Sightseeing",
        activities: [
          "Visit Kargah Nala and Buddha Carving",
        ],
        overnight: "Gilgit",
      },
      {
        day: 4,
        title: "Gilgit → Phander Valley",
        activities: [
          "Visit Khalti Lake",
        ],
        overnight: "Phander Valley",
      },
      {
        day: 5,
        title: "Explore Phander Valley",
        activities: [
          "Trout fishing or hiking",
        ],
        overnight: "Phander Valley",
      },
      {
        day: 6,
        title: "Phander → Shandur",
        activities: [
          "Drive to Shandur Pass",
          "Opening ceremony at Polo Ground",
        ],
        overnight: "Shandur",
      },
      {
        day: 7,
        title: "Shandur Festival",
        activities: [
          "Watch polo matches",
          "Enjoy local culture",
        ],
        overnight: "Shandur",
      },
      {
        day: 8,
        title: "Shandur Festival",
        activities: [
          "Festival activities and sightseeing",
        ],
        overnight: "Shandur",
      },
      {
        day: 9,
        title: "Shandur → Gilgit",
        activities: [
          "Drive back to Gilgit",
        ],
        overnight: "Gilgit",
      },
      {
        day: 10,
        title: "Gilgit → Hunza",
        activities: [
          "Visit Baltit Fort and Altit Fort",
        ],
        overnight: "Hunza",
      },
      {
        day: 11,
        title: "Hunza Sightseeing",
        activities: [
          "Visit Duikar View Point",
          "Explore local markets",
        ],
        overnight: "Hunza",
      },
      {
        day: 12,
        title: "Hunza → Gilgit",
        activities: [
          "Drive back to Gilgit",
        ],
        overnight: "Gilgit",
      },
      {
        day: 13,
        title: "Gilgit → Islamabad",
        activities: [
          "Fly back to Islamabad",
        ],
        overnight: "Islamabad",
      },
      {
        day: 14,
        title: "Departure",
        activities: [
          "Transfer to airport",
        ],
        overnight: "—",
      },
    ],

    mainAttractions: [
      "Shandur Polo Ground",
      "Phander Valley",
      "Hunza Valley",
      "Khalti Lake",
    ],
  },

  {
    id: "hunza-fairy-meadows-tour",
    title: "Hunza & Fairy Meadows Tour",
    location: "Hunza & Fairy Meadows, Gilgit Baltistan",
    rating: 4.9,
    price: 699,
    heroImage: destination1.src,

    description:
      "Experience an unforgettable 8-day journey through Hunza Valley and Fairy Meadows beneath the majestic Nanga Parbat.",

    detailedDescription:
      "This tour combines the cultural beauty of Hunza Valley with the stunning alpine scenery of Fairy Meadows and Nanga Parbat Base Camp.",

    highlights: [
      "Visit Baltit Fort and Altit Fort",
      "Explore Attabad Lake and Passu Cones",
      "Trek to Fairy Meadows and Nanga Parbat Base Camp",
      "Enjoy breathtaking mountain landscapes and local culture",
    ],

    planYourVisit: {
      location: "Hunza & Fairy Meadows",
      bestTimeToVisit: "May to October",
      weather: "8°C - 22°C during summer",
    },

    activities: [
      {
        icon: "trekking",
        title: "Trekking",
        description: "Adventure trekking to Fairy Meadows and Base Camp",
      },
      {
        icon: "photography",
        title: "Photography",
        description: "Capture iconic mountain landscapes",
      },
      {
        icon: "camping",
        title: "Camping",
        description: "Stay in scenic alpine meadows",
      },
    ],

    gallery: [Tour13.src, Tour27.src, Tour26.src],

    itinerary: [
      {
        day: 1,
        title: "Arrival & Hunza Transfer",
        activities: [
          "Arrive at Gilgit Airport",
          "Drive to Hunza Valley",
          "Visit Baltit Fort",
        ],
        overnight: "Hunza",
      },
      {
        day: 2,
        title: "Hunza Exploration",
        activities: [
          "Visit Altit Fort and Altit Village",
          "Sunset at Duikar View Point",
        ],
        overnight: "Hunza",
      },
      {
        day: 3,
        title: "Upper Hunza",
        activities: [
          "Visit Attabad Lake",
          "Explore Passu Cones",
        ],
        overnight: "Hunza / Passu",
      },
      {
        day: 4,
        title: "Hunza → Fairy Meadows",
        activities: [
          "Drive to Raikot Bridge",
          "Jeep ride and trek to Fairy Meadows",
        ],
        overnight: "Fairy Meadows",
      },
      {
        day: 5,
        title: "Nanga Parbat Base Camp",
        activities: [
          "Trek to Nanga Parbat Base Camp",
          "Return to Fairy Meadows",
        ],
        overnight: "Fairy Meadows",
      },
      {
        day: 6,
        title: "Fairy Meadows → Gilgit",
        activities: [
          "Trek back and drive to Gilgit",
          "Explore local bazaar",
        ],
        overnight: "Gilgit",
      },
      {
        day: 7,
        title: "Explore Gilgit",
        activities: [
          "Visit Kargah Buddha",
          "Free time in Gilgit city",
        ],
        overnight: "Gilgit",
      },
      {
        day: 8,
        title: "Departure",
        activities: [
          "Transfer to Gilgit Airport",
          "Fly to Islamabad",
        ],
        overnight: "—",
      },
    ],

    mainAttractions: [
      "Hunza Valley",
      "Attabad Lake",
      "Passu Cones",
      "Fairy Meadows",
      "Nanga Parbat Base Camp",
    ],
  },




// OLD Tours


  {
    id: "shangrila-skardu",
    title: "Shangrila Skardu",
    location: "Skardu, Gilgit Baltistan",
    rating: 5,
    price: 299,
    heroImage: Tour8.src,

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

    gallery: [Tour7.src, Tour9.src, destination2.src],
  },

  {
    id: "upper-kachura-lake",
    title: "Upper Kachura Lake",
    location: "Skardu, Gilgit Baltistan",
    rating: 4.8,
    price: 199,
    heroImage: destination3.src,

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

    gallery: [destination3.src, destination2.src, Tour8.src],
  },

  {
    id: "fairy-meadows",
    title: "Fairy Meadows",
    location: "Gilgit, Gilgit Baltistan",
    rating: 4.9,
    price: 299,
    heroImage: destination1.src,

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

    gallery: [destination1.src, Tour10.src, Tour11.src],
  },

  {
    id: "skardu-tours",
    title: "Skardu Tour",
    location: "Skardu, Gilgit Baltistan",
    rating: 4.8,
    price: 159,
    heroImage: Tour7.src,

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

    gallery: [Tour1.src, Tour7.src, Tour3.src],
  },

  {
    id: "deosai-tours",
    title: "Deosai Trek Tours",
    location: "Skardu, Gilgit Baltistan",
    rating: 4.8,
    price: 159,
    heroImage: Tour2.src,

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

    gallery: [Tour2.src],
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