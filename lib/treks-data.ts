import {
    destination1,
    
} from "@/app/Index"

import { StaticImageData } from "next/image"

export type Highlight = {
    title: string
    description: string
}

export type ItineraryDay = {
    day: number
    title: string
    altitude: string
    activities: string[]
    accommodation: string
    meals: string
}

export type Difficulty =
    | "Easy"
    | "Easy to Moderate"
    | "Moderate"
    | "Hard"
    | "Extreme"

export type Trek = {
    id: string
    slug: string
    title: string
    subtitle: string
    difficulty: Difficulty
    duration: string
    elevation: string
    description: string
    mainImage?: string | StaticImageData
    secondaryImage?: string | StaticImageData
    highlights: Highlight[]
    bestTimeToVisit: string
    content: string
    itinerary: ItineraryDay[]
}

export const treks: Trek[] = [
    // {
    //     id: "k2-base-camp",
    //     slug: "k2-base-camp",
    //     title: "K2 Base Camp",
    //     subtitle: "The Savage Mountain's Gateway",
    //     difficulty: "Extreme",
    //     duration: "14-16 days",
    //     elevation: "5,150m",
    //     description:
    //         "Standing at the foot of K2, the world's second-highest peak, is an experience that defies description.",

    //     mainImage: destination1,
    //     secondaryImage: destination1,

    //     highlights: [
    //         {
    //             title: "Concordia",
    //             description:
    //                 "Known as the Throne Room of the Mountain Gods.",
    //         },
    //         {
    //             title: "Baltoro Glacier",
    //             description:
    //                 "One of the longest glaciers outside the polar regions.",
    //         },
    //     ],

    //     bestTimeToVisit:
    //         "June to September offers the best trekking conditions.",

    //     content:
    //         "The K2 Base Camp trek is considered one of the most challenging non-technical treks in the world.",

    //     itinerary: [
    //         {
    //             day: 1,
    //             title: "Arrival in Islamabad",
    //             altitude: "500m",
    //             activities: ["Arrive at Benazir Bhutto International Airport", "Transfer to hotel", "Rest and acclimatization"],
    //             accommodation: "Hotel in Islamabad",
    //             meals: "Lunch, Dinner"
    //         },
    //         {
    //             day: 2,
    //             title: "Islamabad to Skardu",
    //             altitude: "2,500m",
    //             activities: ["Scenic flight to Skardu", "Check-in and exploration of local market"],
    //             accommodation: "Hotel in Skardu",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 3,
    //             title: "Skardu to Askole",
    //             altitude: "3,000m",
    //             activities: ["Drive to Askole", "Visit local villages", "Prepare equipment for trek"],
    //             accommodation: "Guesthouse in Askole",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 4,
    //             title: "Askole to Jhola",
    //             altitude: "3,200m",
    //             activities: ["Trek through Braldo Valley", "Cross glacial streams", "Set up camp"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 5,
    //             title: "Jhola to Paiju",
    //             altitude: "3,400m",
    //             activities: ["Trek along Baltoro Glacier", "Observe glacial formations", "Wildlife spotting"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 6,
    //             title: "Paiju to Liligo",
    //             altitude: "3,600m",
    //             activities: ["Continue on Baltoro Glacier", "Pass through Paiju Camp meadows"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 7,
    //             title: "Liligo to Goro II",
    //             altitude: "3,900m",
    //             activities: ["Trek through alpine terrain", "Acclimatization walk"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 8,
    //             title: "Goro II to Concordia",
    //             altitude: "4,700m",
    //             activities: ["Hike to Concordia", "Views of Broad Peak and Gasherbrum peaks", "Rest day"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 9,
    //             title: "Concordia to K2 Base Camp",
    //             altitude: "5,150m",
    //             activities: ["Trek to K2 Base Camp", "Experience the Savage Mountain", "Photography and exploration"],
    //             accommodation: "Tent camp at K2 BC",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 10,
    //             title: "Rest Day at K2 Base Camp",
    //             altitude: "5,150m",
    //             activities: ["Rest and acclimatization", "Explore the camp", "Optional hikes to nearby viewpoints"],
    //             accommodation: "Tent camp at K2 BC",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 11,
    //             title: "K2 Base Camp to Goro II",
    //             altitude: "3,900m",
    //             activities: ["Begin descent from K2 BC", "Trek back through glacier regions"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 12,
    //             title: "Goro II to Liligo",
    //             altitude: "3,600m",
    //             activities: ["Continue descent", "Final views of Karakoram peaks"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 13,
    //             title: "Liligo to Askole",
    //             altitude: "3,000m",
    //             activities: ["Trek through Baltoro Glacier region", "Reach Askole village"],
    //             accommodation: "Guesthouse in Askole",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 14,
    //             title: "Askole to Skardu",
    //             altitude: "2,500m",
    //             activities: ["Drive back to Skardu", "Explore local bazaar", "Celebration dinner"],
    //             accommodation: "Hotel in Skardu",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 15,
    //             title: "Skardu to Islamabad",
    //             altitude: "500m",
    //             activities: ["Flight to Islamabad", "Transfer to airport for departure"],
    //             accommodation: "Hotel in Islamabad",
    //             meals: "Breakfast, Lunch"
    //         },
    //         {
    //             day: 16,
    //             title: "Departure",
    //             altitude: "500m",
    //             activities: ["Depart Islamabad"],
    //             accommodation: "N/A",
    //             meals: "N/A"
    //         }
    //     ]
    // },

    // {
    //     id: "nanga-parbat-basecamp",
    //     slug: "nanga-parbat-basecamp",
    //     title: "Nanga Parbat Base Camp",
    //     subtitle: "The Killer Mountain's Threshold",
    //     difficulty: "Hard",
    //     duration: "12-14 days",
    //     elevation: "3,850m",

    //     description:
    //         "Nanga Parbat earned its nickname from numerous difficult expeditions.",

    //     mainImage: destination1,
    //     secondaryImage: destination1,

    //     highlights: [
    //         {
    //             title: "The Rupal Face",
    //             description:
    //                 "The largest mountain face on Earth.",
    //         },
    //         {
    //             title: "Tarashing Village",
    //             description:
    //                 "Traditional mountain village with terraced fields.",
    //         },
    //         {
    //             title: "Shaigiri",
    //             description:
    //                 "Last permanent settlement before wilderness.",
    //         },
    //         {
    //             title: "Local Culture",
    //             description:
    //                 "Experience the warmth of mountain communities.",
    //         },
    //     ],

    //     bestTimeToVisit:
    //         "June to September offers the most stable weather.",

    //     content:
    //         "The trek to Nanga Parbat Base Camp is a journey to the foot of the world's ninth-highest mountain.",

    //     itinerary: [
    //         {
    //             day: 1,
    //             title: "Islamabad to Gilgit",
    //             altitude: "1,500m",
    //             activities: ["Flight to Gilgit", "Check-in at hotel", "Acclimatization"],
    //             accommodation: "Hotel in Gilgit",
    //             meals: "Lunch, Dinner"
    //         },
    //         {
    //             day: 2,
    //             title: "Gilgit to Astore",
    //             altitude: "2,500m",
    //             activities: ["Drive to Astore Valley", "Explore local culture", "Prepare for trek"],
    //             accommodation: "Guesthouse in Astore",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 3,
    //             title: "Astore to Tarashing",
    //             altitude: "2,800m",
    //             activities: ["Trek through scenic valley", "Visit traditional village", "Meet local guides"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 4,
    //             title: "Tarashing to Shaigiri",
    //             altitude: "3,200m",
    //             activities: ["Trek through alpine meadows", "Last settlement visit", "Acclimatization"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 5,
    //             title: "Shaigiri to Rupal Base Camp",
    //             altitude: "3,500m",
    //             activities: ["Trek to Herligkoffer Base Camp", "View the Rupal Face", "Photography"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 6,
    //             title: "Rest Day at Rupal",
    //             altitude: "3,500m",
    //             activities: ["Explore Rupal Face", "Hike to viewpoints", "Acclimatization"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 7,
    //             title: "Rupal Base Camp to Shaigiri",
    //             altitude: "3,200m",
    //             activities: ["Begin descent", "Return through meadows"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 8,
    //             title: "Shaigiri to Astore",
    //             altitude: "2,500m",
    //             activities: ["Trek back to Astore Valley", "Enjoy local hospitality"],
    //             accommodation: "Guesthouse in Astore",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 9,
    //             title: "Astore to Gilgit",
    //             altitude: "1,500m",
    //             activities: ["Drive back to Gilgit", "Visit local bazaar"],
    //             accommodation: "Hotel in Gilgit",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 10,
    //             title: "Gilgit to Islamabad",
    //             altitude: "500m",
    //             activities: ["Flight to Islamabad", "Transfer to hotel"],
    //             accommodation: "Hotel in Islamabad",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 11,
    //             title: "Rest and Departure",
    //             altitude: "500m",
    //             activities: ["Rest day in Islamabad", "Shopping and sightseeing"],
    //             accommodation: "Hotel in Islamabad",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 12,
    //             title: "Departure",
    //             altitude: "500m",
    //             activities: ["Transfer to airport", "Depart"],
    //             accommodation: "N/A",
    //             meals: "Breakfast"
    //         }
    //     ]
    // },

    // {
    //     id: "moses-peak",
    //     slug: "moses-peak",
    //     title: "Moses Peak",
    //     subtitle: "Hidden Gem of Karakoram",
    //     difficulty: "Hard",
    //     duration: "8-10 days",
    //     elevation: "4,200m",

    //     description:
    //         "Moses Peak offers pristine wilderness and spectacular mountain views.",

    //     mainImage: destination1,
    //     secondaryImage: destination1,

    //     highlights: [
    //         {
    //             title: "Pristine Glaciers",
    //             description:
    //                 "Untouched ice formations and crevasse fields.",
    //         },
    //         {
    //             title: "Technical Sections",
    //             description:
    //                 "Challenging rock scrambles and glacier crossings.",
    //         },
    //         {
    //             title: "360° Views",
    //             description:
    //                 "Panoramic vistas of the Karakoram.",
    //         },
    //         {
    //             title: "Wildlife Encounters",
    //             description:
    //                 "Spot blue sheep and snow leopards.",
    //         },
    //     ],

    //     bestTimeToVisit:
    //         "June to September provides the best trekking weather.",

    //     content:
    //         "Moses Peak remains one of the lesser-known gems in the Karakoram range.",

    //     itinerary: [
    //         {
    //             day: 1,
    //             title: "Islamabad to Skardu",
    //             altitude: "2,500m",
    //             activities: ["Flight to Skardu", "Hotel check-in", "Acclimatization"],
    //             accommodation: "Hotel in Skardu",
    //             meals: "Lunch, Dinner"
    //         },
    //         {
    //             day: 2,
    //             title: "Skardu to Shigar",
    //             altitude: "2,600m",
    //             activities: ["Drive to Shigar", "Visit local fort", "Meet trek team"],
    //             accommodation: "Guesthouse in Shigar",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 3,
    //             title: "Shigar to Camp 1",
    //             altitude: "3,200m",
    //             activities: ["Begin trek through forests", "Set up base camp", "Acclimatization walk"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 4,
    //             title: "Camp 1 to Camp 2",
    //             altitude: "3,800m",
    //             activities: ["Trek through alpine terrain", "Cross glacial streams", "Rock scrambling"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 5,
    //             title: "Camp 2 to Moses Peak Base",
    //             altitude: "4,100m",
    //             activities: ["Approach Moses Peak", "Technical sections", "Rope setup"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 6,
    //             title: "Moses Peak Summit Attempt",
    //             altitude: "4,200m",
    //             activities: ["Early morning summit push", "Rock climbing and scrambling", "360° mountain views", "Return to camp"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 7,
    //             title: "Descent to Camp 1",
    //             altitude: "3,200m",
    //             activities: ["Begin descent", "Trek through forests", "Wildlife spotting"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 8,
    //             title: "Camp 1 to Skardu",
    //             altitude: "2,500m",
    //             activities: ["Final trek to Skardu", "Hotel check-in", "Celebration meal"],
    //             accommodation: "Hotel in Skardu",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 9,
    //             title: "Skardu to Islamabad",
    //             altitude: "500m",
    //             activities: ["Flight to Islamabad", "Hotel transfer"],
    //             accommodation: "Hotel in Islamabad",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 10,
    //             title: "Departure",
    //             altitude: "500m",
    //             activities: ["Final rest and shopping", "Airport transfer"],
    //             accommodation: "N/A",
    //             meals: "Breakfast"
    //         }
    //     ]
    // },

    // {
    //     id: "fairy-meadows",
    //     slug: "fairy-meadows",
    //     title: "Fairy Meadows",
    //     subtitle: "Heaven on Earth",
    //     difficulty: "Easy to Moderate",
    //     duration: "4-6 days",
    //     elevation: "3,300m",

    //     description:
    //         "Fairy Meadows offers one of the most accessible mountain experiences in Pakistan.",

    //     mainImage: destination1,
    //     secondaryImage: destination1,

    //     highlights: [
    //         {
    //             title: "Alpine Meadows",
    //             description:
    //                 "Carpets of wildflowers during summer.",
    //         },
    //         {
    //             title: "Nanga Parbat Views",
    //             description:
    //                 "Unobstructed mountain scenery.",
    //         },
    //         {
    //             title: "Beyal Camp",
    //             description:
    //                 "Higher camp with dramatic vistas.",
    //         },
    //         {
    //             title: "Raikot Glacier",
    //             description:
    //                 "Easy glacier viewing access.",
    //         },
    //     ],

    //     bestTimeToVisit:
    //         "May to October offers pleasant weather and green meadows.",

    //     content:
    //         "Fairy Meadows truly lives up to its magical name.",

    //     itinerary: [
    //         {
    //             day: 1,
    //             title: "Islamabad to Chilas",
    //             altitude: "1,000m",
    //             activities: ["Drive from Islamabad", "Stop at scenic viewpoints", "Hotel check-in"],
    //             accommodation: "Hotel in Chilas",
    //             meals: "Lunch, Dinner"
    //         },
    //         {
    //             day: 2,
    //             title: "Chilas to Raikot",
    //             altitude: "1,500m",
    //             activities: ["Drive to Raikot Bridge", "Meet porter team", "Prepare equipment"],
    //             accommodation: "Guesthouse in Raikot",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 3,
    //             title: "Raikot to Fairy Meadows Base Camp",
    //             altitude: "2,500m",
    //             activities: ["Trek through forests", "Cross river streams", "Arrive at meadow base"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 4,
    //             title: "Fairy Meadows Rest Day",
    //             altitude: "2,500m",
    //             activities: ["Explore alpine meadows", "Photography of wildflowers", "Nanga Parbat views", "Acclimatization"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 5,
    //             title: "Fairy Meadows to Beyal Camp",
    //             altitude: "3,300m",
    //             activities: ["Trek to higher camp", "Better mountain vistas", "Sunset viewing"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 6,
    //             title: "Beyal Camp Exploration",
    //             altitude: "3,300m",
    //             activities: ["Rest and acclimatization", "Glacier viewing", "Wildlife spotting"],
    //             accommodation: "Tent camp",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 7,
    //             title: "Descent to Raikot",
    //             altitude: "1,500m",
    //             activities: ["Trek back down", "Return to Raikot", "Celebration dinner"],
    //             accommodation: "Guesthouse in Raikot",
    //             meals: "Breakfast, Lunch, Dinner"
    //         },
    //         {
    //             day: 8,
    //             title: "Raikot to Islamabad",
    //             altitude: "500m",
    //             activities: ["Drive back to Islamabad", "Hotel transfer"],
    //             accommodation: "Hotel in Islamabad",
    //             meals: "Breakfast, Lunch, Dinner"
    //         }
    //     ]
    // },

    {
        id: "k2-gondogoro-la-trek",
        slug: "k2-gondogoro-la-trek",
        title: "K2 Base Camp & Gondogoro La Trek",
        subtitle: "The Ultimate Karakoram Expedition",
        difficulty: "Extreme",
        duration: "17-18 days",
        elevation: "5,585m",

        description:
            "One of the world's most prestigious high-altitude trekking expeditions featuring K2 Base Camp, Baltoro Glacier, and Gondogoro La.",

        mainImage: destination1,
        secondaryImage: destination1,

        highlights: [
            {
                title: "K2 Base Camp",
                description:
                    "Stand at the foot of the world's second-highest mountain.",
            },
            {
                title: "Concordia",
                description:
                    "Known as the Throne Room of the Gods.",
            },
            {
                title: "Baltoro Glacier",
                description:
                    "One of the largest glaciers outside the polar regions.",
            },
            {
                title: "Gondogoro La",
                description:
                    "A spectacular high-altitude mountain pass crossing.",
            },
        ],

        bestTimeToVisit:
            "June to August offers the best conditions for high-altitude trekking.",

        content:
            "The K2 Base Camp and Gondogoro La Trek is designed for experienced trekkers seeking an unforgettable Karakoram adventure. The route passes through Askole, Baltoro Glacier, Concordia, K2 Base Camp, and Gondogoro La before descending to Hushe Valley. Trekkers experience breathtaking mountain scenery including K2, Broad Peak, and Gasherbrum peaks along the journey.",

        itinerary: [
            {
                day: 1,
                title: "Islamabad to Skardu",
                altitude: "2,500m",
                activities: ["Flight to Skardu", "Hotel check-in", "Acclimatization"],
                accommodation: "Hotel in Skardu",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Skardu to Askole",
                altitude: "3,000m",
                activities: ["Drive to Askole", "Visit local villages", "Equipment preparation"],
                accommodation: "Guesthouse in Askole",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Askole to Jhola",
                altitude: "3,200m",
                activities: ["Trek through Braldo Valley", "Cross glacial streams", "Set up camp"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Jhola to Paiju",
                altitude: "3,400m",
                activities: ["Trek on Baltoro Glacier", "Glacial formations", "Wildlife spotting"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Paiju to Liligo",
                altitude: "3,600m",
                activities: ["Continue on glacier", "Alpine terrain", "Acclimatization"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Liligo to Goro II",
                altitude: "3,900m",
                activities: ["Trek through high altitude plains", "Rest and acclimatization"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Goro II to Concordia",
                altitude: "4,700m",
                activities: ["Hike to Concordia", "Views of Broad Peak and Gasherbrum"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 8,
                title: "Concordia to K2 Base Camp",
                altitude: "5,150m",
                activities: ["Trek to K2 Base Camp", "Explore the camp", "Photography"],
                accommodation: "Tent camp at K2 BC",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 9,
                title: "Rest Day at K2 Base Camp",
                altitude: "5,150m",
                activities: ["Acclimatization", "Explore viewpoints", "Rest and recovery"],
                accommodation: "Tent camp at K2 BC",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 10,
                title: "K2 BC to Concordia",
                altitude: "4,700m",
                activities: ["Begin trek to Gondogoro La", "Return to Concordia"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 11,
                title: "Concordia to Gondogoro La Base",
                altitude: "4,900m",
                activities: ["Trek towards Gondogoro La pass", "Set up high camp"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 12,
                title: "Gondogoro La Crossing",
                altitude: "5,585m",
                activities: ["Early crossing of Gondogoro La", "Technical glacier sections", "Descent to other side"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 13,
                title: "Gondogoro La to Khuspang",
                altitude: "4,200m",
                activities: ["Trek through Hushe Valley", "Descent through forests"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 14,
                title: "Khuspang to Hushe",
                altitude: "2,500m",
                activities: ["Continue descent", "Reach Hushe village"],
                accommodation: "Guesthouse in Hushe",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 15,
                title: "Hushe to Skardu",
                altitude: "2,500m",
                activities: ["Drive to Skardu", "Rest and recovery"],
                accommodation: "Hotel in Skardu",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 16,
                title: "Skardu to Islamabad",
                altitude: "500m",
                activities: ["Flight to Islamabad", "Hotel transfer"],
                accommodation: "Hotel in Islamabad",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 17,
                title: "Rest and Departure",
                altitude: "500m",
                activities: ["Rest day", "Shopping and sightseeing"],
                accommodation: "Hotel in Islamabad",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 18,
                title: "Departure",
                altitude: "500m",
                activities: ["Transfer to airport", "Depart"],
                accommodation: "N/A",
                meals: "Breakfast"
            }
        ]
    },

    {
        id: "nanga-parbat-rupal-face",
        slug: "nanga-parbat-rupal-face",
        title: "Nanga Parbat Rupal Face Trek",
        subtitle: "Journey to the World's Largest Mountain Face",
        difficulty: "Hard",
        duration: "8 days",
        elevation: "4,000m+",

        description:
            "An adventurous trekking experience to the legendary Rupal Face of Nanga Parbat including visits to Herligkoffer Base Camp and Second Base Camp.",

        mainImage: destination1,
        secondaryImage: destination1,

        highlights: [
            {
                title: "Rupal Face",
                description:
                    "Witness the world's largest mountain face up close.",
            },
            {
                title: "Herligkoffer Base Camp",
                description:
                    "Historic first base camp of Nanga Parbat.",
            },
            {
                title: "Second Base Camp",
                description:
                    "Advanced high-altitude camp with glacier surroundings.",
            },
            {
                title: "Chorit & Rupal Valley",
                description:
                    "Experience scenic valleys and mountain culture.",
            },
        ],

        bestTimeToVisit:
            "June to September provides the most stable trekking conditions.",

        content:
            "This 8-day trekking itinerary combines scenic travel through Gilgit, Astore, Chorit Valley, and Rupal Valley with challenging trekking routes to Nanga Parbat's Rupal Face. Trekkers visit Herligkoffer Base Camp and the Second Base Camp while experiencing glacier crossings, alpine landscapes, and breathtaking mountain views.",

        itinerary: [
            {
                day: 1,
                title: "Islamabad to Gilgit",
                altitude: "1,500m",
                activities: ["Flight to Gilgit", "Hotel check-in", "Acclimatization and rest"],
                accommodation: "Hotel in Gilgit",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Gilgit to Astore",
                altitude: "2,500m",
                activities: ["Scenic drive to Astore Valley", "Explore local culture", "Trek preparation"],
                accommodation: "Guesthouse in Astore",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Astore to Chorit",
                altitude: "2,900m",
                activities: ["Trek through Chorit Valley", "Visit traditional settlements", "Meet local guides"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Chorit to Herligkoffer Base Camp",
                altitude: "3,500m",
                activities: ["Trek to Herligkoffer BC", "View Rupal Face", "Historical site exploration"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Herligkoffer BC to Second Base Camp",
                altitude: "4,000m",
                activities: ["Trek to Second Base Camp", "Glacier crossing", "Advanced acclimatization"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Exploration and Rest Day",
                altitude: "4,000m",
                activities: ["Explore glacier formations", "Photography of Rupal Face", "Rest and recovery"],
                accommodation: "Tent camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Second Base Camp to Astore",
                altitude: "2,500m",
                activities: ["Begin descent", "Trek back through valleys"],
                accommodation: "Guesthouse in Astore",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 8,
                title: "Astore to Gilgit",
                altitude: "1,500m",
                activities: ["Drive back to Gilgit", "Visit local bazaar", "Celebration dinner"],
                accommodation: "Hotel in Gilgit",
                meals: "Breakfast, Lunch, Dinner"
            }
        ]
    },

]
