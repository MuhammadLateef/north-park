"use client"

import { use } from "react"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import type { StaticImageData } from "next/image"
import {
  MapPin,
  Calendar,
  Thermometer,
  Waves,
  Mountain,
  Camera,
  Fish,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { destination1, destination2, destination3 } from "@/app/Index"

interface Activity {
  icon: LucideIcon
  name: string
  description: string
}

interface Destination {
  title: string
  location: string
  price: number
  heroImage?: string | StaticImageData
  description: string
  bestTime: string
  weather: string
  activities: Activity[]
  gallery: (string | StaticImageData)[]
}

interface DestinationData {
  [key: string]: Destination
}

// ✅ In Next.js 15 App Router, params is a Promise — type it accordingly
interface DestinationDetailProps {
  params: Promise<{ id: string }>
}

const destinationData: DestinationData = {
  "shigar-fort-1": {
    title: "Nangma Valley",
    location: "Skardu, Gilgit Baltistan",
    price: 299,
    heroImage: destination1,
    description:
      "Nangma Valley, nestled in the heart of the Karakoram mountain range, offers an unparalleled blend of natural beauty and cultural richness. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bestTime: "June to September",
    weather: "15° - 25°C during summer",
    activities: [
      { icon: Waves,    name: "Swimming",     description: "Crystal clear water perfect for swimming" },
      { icon: Mountain, name: "Hiking",        description: "Scenic trails around the lake" },
      { icon: Camera,   name: "Photography",   description: "Stunning landscape photo opportunities" },
      { icon: Fish,     name: "Fishing",       description: "Traditional fishing experiences" },
    ],
    gallery: [
      destination1,
      destination2,
      destination3,
    ],
  },
  "shigar-fort-2": {
    title: "Nangma Valley",
    location: "Skardu, Gilgit Baltistan",
    price: 399,
    heroImage: destination2,
    description:
      "Experience the majestic beauty of Nangma Valley with premium accommodations and guided tours. This pristine destination offers breathtaking views and unforgettable adventures.",
    bestTime: "June to September",
    weather: "15° - 25°C during summer",
    activities: [
      { icon: Waves,    name: "Swimming",     description: "Crystal clear water perfect for swimming" },
      { icon: Mountain, name: "Hiking",        description: "Scenic trails around the lake" },
      { icon: Camera,   name: "Photography",   description: "Stunning landscape photo opportunities" },
      { icon: Fish,     name: "Fishing",       description: "Traditional fishing experiences" },
    ],
    gallery: [
      destination1,
      destination2,
      destination3
    ],
  },
  "shigar-fort-3": {
    title: "Nangma Valley",
    location: "Skardu, Gilgit Baltistan",
    price: 499,
    heroImage: destination3,
    description:
      "Luxury experience in Nangma Valley with world-class amenities and personalized service. Discover the hidden paradise with exclusive access to the most scenic locations.",
    bestTime: "June to September",
    weather: "15° - 25°C during summer",
    activities: [
      { icon: Waves,    name: "Swimming",     description: "Crystal clear water perfect for swimming" },
      { icon: Mountain, name: "Hiking",        description: "Scenic trails around the lake" },
      { icon: Camera,   name: "Photography",   description: "Stunning landscape photo opportunities" },
      { icon: Fish,     name: "Fishing",       description: "Traditional fishing experiences" },
    ],
    gallery: [
      destination1,
      destination2,
      destination3,
    ],
  },
}

export default function DestinationDetail({ params }: DestinationDetailProps) {
  // ✅ Unwrap the params Promise with React.use()
  const { id } = use(params)
  const destination = destinationData[id]

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Destination not found
          </h1>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          src={destination.heroImage || "/placeholder.svg"}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 uppercase tracking-wider">
            {destination.title}
          </h1>
          <p className="text-lg opacity-90">
            Discover breathtaking destinations, ancient forts, and unforgettable
            adventures - tailored just for you.
          </p>
        </div>
        <div className="absolute bottom-8 right-8 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
          <span className="text-2xl font-bold">${destination.price}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-script text-sky-400 mb-6">
                About {destination.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {destination.description}
              </p>
            </section>

            {/* Activities */}
            <section className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {destination.activities.map((activity: Activity, index: number) => (
                  <Card
                    key={index}
                    className="text-center p-6 hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      <activity.icon className="w-12 h-12 mx-auto mb-4 text-sky-500" />
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {activity.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {activity.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="mb-12">
              <h2 className="text-3xl font-script text-sky-400 mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destination.gallery.map((image: string | StaticImageData, index: number) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${destination.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Plan Your Visit
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">{destination.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Best Time to Visit</h4>
                      <p className="text-gray-600">{destination.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Thermometer className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Weather</h4>
                      <p className="text-gray-600">{destination.weather}</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-sky-500 hover:bg-sky-600 text-white py-3 text-lg">
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-slate-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready To Experience {destination.title}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you plan your perfect trip to this hidden paradise
          </p>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 text-lg">
            Visit Your Plan
          </Button>
        </section>
      </div>
    </div>
  )
}
