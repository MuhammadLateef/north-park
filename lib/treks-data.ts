import {
    destination1,
   
} from "@/app/Index"

import { StaticImageData } from "next/image"

export type Highlight = {
    title: string
    description: string
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
}

export const treks: Trek[] = [
    {
        id: "k2-base-camp",
        slug: "k2-base-camp",
        title: "K2 Base Camp",
        subtitle: "The Savage Mountain's Gateway",
        difficulty: "Extreme",
        duration: "14-16 days",
        elevation: "5,150m",
        description:
            "Standing at the foot of K2, the world's second-highest peak, is an experience that defies description.",

        mainImage: destination1,
        secondaryImage: destination1,

        highlights: [
            {
                title: "Concordia",
                description:
                    "Known as the Throne Room of the Mountain Gods.",
            },
            {
                title: "Baltoro Glacier",
                description:
                    "One of the longest glaciers outside the polar regions.",
            },
        ],

        bestTimeToVisit:
            "June to September offers the best trekking conditions.",

        content:
            "The K2 Base Camp trek is considered one of the most challenging non-technical treks in the world.",
    },

    {
        id: "nanga-parbat-basecamp",
        slug: "nanga-parbat-basecamp",
        title: "Nanga Parbat Base Camp",
        subtitle: "The Killer Mountain's Threshold",
        difficulty: "Hard",
        duration: "12-14 days",
        elevation: "3,850m",

        description:
            "Nanga Parbat earned its nickname from numerous difficult expeditions.",

        mainImage: destination1,
        secondaryImage: destination1,

        highlights: [
            {
                title: "The Rupal Face",
                description:
                    "The largest mountain face on Earth.",
            },
            {
                title: "Tarashing Village",
                description:
                    "Traditional mountain village with terraced fields.",
            },
            {
                title: "Shaigiri",
                description:
                    "Last permanent settlement before wilderness.",
            },
            {
                title: "Local Culture",
                description:
                    "Experience the warmth of mountain communities.",
            },
        ],

        bestTimeToVisit:
            "June to September offers the most stable weather.",

        content:
            "The trek to Nanga Parbat Base Camp is a journey to the foot of the world's ninth-highest mountain.",
    },

    {
        id: "moses-peak",
        slug: "moses-peak",
        title: "Moses Peak",
        subtitle: "Hidden Gem of Karakoram",
        difficulty: "Hard",
        duration: "8-10 days",
        elevation: "4,200m",

        description:
            "Moses Peak offers pristine wilderness and spectacular mountain views.",

        mainImage: destination1,
        secondaryImage: destination1,

        highlights: [
            {
                title: "Pristine Glaciers",
                description:
                    "Untouched ice formations and crevasse fields.",
            },
            {
                title: "Technical Sections",
                description:
                    "Challenging rock scrambles and glacier crossings.",
            },
            {
                title: "360° Views",
                description:
                    "Panoramic vistas of the Karakoram.",
            },
            {
                title: "Wildlife Encounters",
                description:
                    "Spot blue sheep and snow leopards.",
            },
        ],

        bestTimeToVisit:
            "June to September provides the best trekking weather.",

        content:
            "Moses Peak remains one of the lesser-known gems in the Karakoram range.",
    },

    {
        id: "fairy-meadows",
        slug: "fairy-meadows",
        title: "Fairy Meadows",
        subtitle: "Heaven on Earth",
        difficulty: "Easy to Moderate",
        duration: "4-6 days",
        elevation: "3,300m",

        description:
            "Fairy Meadows offers one of the most accessible mountain experiences in Pakistan.",

        mainImage: destination1,
        secondaryImage: destination1,

        highlights: [
            {
                title: "Alpine Meadows",
                description:
                    "Carpets of wildflowers during summer.",
            },
            {
                title: "Nanga Parbat Views",
                description:
                    "Unobstructed mountain scenery.",
            },
            {
                title: "Beyal Camp",
                description:
                    "Higher camp with dramatic vistas.",
            },
            {
                title: "Raikot Glacier",
                description:
                    "Easy glacier viewing access.",
            },
        ],

        bestTimeToVisit:
            "May to October offers pleasant weather and green meadows.",

        content:
            "Fairy Meadows truly lives up to its magical name.",
    },
]