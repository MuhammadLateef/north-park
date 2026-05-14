// app/tour/[id]/page.tsx

"use client"

import { use } from "react"
import Image from "next/image"
import {
  MapPin,
  Calendar,
  Thermometer,
  Waves,
  Mountain,
  Camera,
  Fish,
  Tent,
  Sailboat,
  TreePine,
  Bike,
  CheckCircle,
  Star,
} from "lucide-react"
import { getTourById } from "@/data/tour"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"



// Map activity icon strings to Lucide components
const ICON_MAP: Record<string, React.ElementType> = {
  swimming:    Waves,
  hiking:      Mountain,
  photography: Camera,
  fishing:     Fish,
  boating:     Sailboat,
  camping:     Tent,
  heritage:    TreePine,
  trekking:    Mountain,
  skiing:      Bike,
  nature:      TreePine,
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default function TourDetailPage({ params }: PageProps) {
  const { id } = use(params)
  const tour = getTourById(id)

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tour not found</h1>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative h-96 md:h-125">
        <Image
          src={tour.heroImage || "/placeholder.svg"}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{tour.title}</h1>
          <p className="text-lg opacity-90">{tour.description}</p>
        </div>
        <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
          <span className="text-2xl font-bold">${tour.price}</span>
          <span className="text-sm opacity-80 ml-1">/ person</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* About */}
            <section>
              <h2 className="text-3xl font-script text-sky-400 mb-4">About {tour.title}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{tour.detailedDescription}</p>
            </section>

            {/* Tour Highlights (only if data exists) */}
            {tour.highlights && tour.highlights.length > 0 && (
              <section>
                <h2 className="text-3xl font-script text-sky-400 mb-6">Tour Highlights</h2>
                <ul className="space-y-3">
                  {tour.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Itinerary Table (only if data exists) */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <section>
                <h2 className="text-3xl font-script text-sky-400 mb-6">Itinerary</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sky-500 text-white">
                        <th className="px-4 py-3 text-left font-semibold w-20">Day</th>
                        <th className="px-4 py-3 text-left font-semibold">Title</th>
                        <th className="px-4 py-3 text-left font-semibold">Activities</th>
                        <th className="px-4 py-3 text-left font-semibold w-36">Overnight</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tour.itinerary.map((day, i) => (
                        <tr
                          key={day.day}
                          className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}
                        >
                          <td className="px-4 py-4 font-bold text-sky-600 align-top">
                            Day {day.day}
                          </td>
                          <td className="px-4 py-4 font-semibold text-gray-900 align-top whitespace-nowrap">
                            {day.title}
                          </td>
                          <td className="px-4 py-4 text-gray-600 align-top">
                            <ul className="space-y-1 list-disc list-inside">
                              {day.activities.map((act, j) => (
                                <li key={j}>{act}</li>
                              ))}
                            </ul>
                          </td>
                          <td className="px-4 py-4 text-gray-600 align-top">
                            {day.overnight}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Activities */}
            <section>
              <h2 className="text-3xl font-script text-sky-400 mb-6">Activities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tour.activities.map((activity, i) => {
                  const Icon = ICON_MAP[activity.icon] ?? Mountain
                  return (
                    <Card key={i} className="text-center p-4 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <Icon className="w-10 h-10 mx-auto mb-3 text-sky-500" />
                        <h3 className="font-semibold text-gray-900 mb-1">{activity.title}</h3>
                        <p className="text-sm text-gray-500">{activity.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* Main Attractions (only if data exists) */}
            {tour.mainAttractions && tour.mainAttractions.length > 0 && (
              <section>
                <h2 className="text-3xl font-script text-sky-400 mb-6">Main Attractions</h2>
                <div className="flex flex-wrap gap-3">
                  {tour.mainAttractions.map((attraction, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      <Star className="w-4 h-4 fill-sky-400 text-sky-400" />
                      {attraction}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery */}
            <section>
              <h2 className="text-3xl font-script text-sky-400 mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tour.gallery.map((img, i) => (
                  <div key={i} className="relative h-56 rounded-xl overflow-hidden">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${tour.title} photo ${i + 1}`}
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
              <CardContent className="p-6 space-y-5">
                <h3 className="text-xl font-bold text-gray-900">Plan Your Visit</h3>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600 text-sm">{tour.planYourVisit.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Best Time to Visit</p>
                    <p className="text-gray-600 text-sm">{tour.planYourVisit.bestTimeToVisit}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Weather</p>
                    <p className="text-gray-600 text-sm">{tour.planYourVisit.weather}</p>
                  </div>
                </div>

                {/* Duration badge — shown only if itinerary exists */}
                {tour.itinerary && (
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Duration</p>
                      <p className="text-gray-600 text-sm">{tour.itinerary.length} Days</p>
                    </div>
                  </div>
                )}

                <Button className="w-full mt-4 bg-sky-500 hover:bg-sky-600 text-white text-base py-3">
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* CTA */}
        <section className="mt-16 bg-slate-800 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to experience {tour.title}?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            Let us help you plan your perfect trip to this stunning destination.
          </p>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 text-lg">
            Plan Your Trip
          </Button>
        </section>

      </div>
    </div>
  )
}