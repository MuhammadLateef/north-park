// app/tour/page.tsx

import DestinationCard from "@/components/destinations/destination-card"
import { tourData } from "@/data/tour"           // ← single source of truth

export default function TourPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sky-400 text-lg font-script mb-4 heading">
            Explore now
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Dream Destination
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Finding the perfect travel experience is like uncovering a hidden treasure.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourData.map((tour) => (
            <DestinationCard
              key={tour.id}
              destination={{
                id: tour.id,
                title: tour.title,
                location: tour.location,
                image: tour.heroImage,    // ← mapped to "image" (card expects "image")
                rating: tour.rating,
              }}
            />
          ))}
        </div>

      </div>
    </div>
  )
}