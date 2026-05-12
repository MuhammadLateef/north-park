import DestinationCard from "@/components/destinations/destination-card"
import { StaticImageData } from "next/image"
interface Destination {
  id: string
  title: string
  location: string
  rating: number
  image: string | StaticImageData
  price: number
  description: string
}

const destinations: Destination[] = [
  {
    id: "shigar-fort-1",
    title: "Shigar Fort",
    location: "Shigar",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    price: 299,
    description:
      "Discover breathtaking destinations, ancient forts, and unforgettable adventures - tailored just for you.",
  },
  {
    id: "shigar-fort-2",
    title: "Shigar Fort",
    location: "Shigar",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    price: 399,
    description:
      "Experience the majestic beauty of ancient architecture surrounded by stunning mountain landscapes.",
  },
  {
    id: "shigar-fort-3",
    title: "Shigar Fort",
    location: "Shigar",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    price: 499,
    description:
      "Luxury accommodations in a historic setting with world-class amenities and breathtaking views.",
  },
  {
    id: "shigar-fort-4",
    title: "Shigar Fort",
    location: "Shigar",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    price: 299,
    description:
      "Discover breathtaking destinations, ancient forts, and unforgettable adventures - tailored just for you.",
  },
  {
    id: "shigar-fort-5",
    title: "Shigar Fort",
    location: "Shigar",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    price: 399,
    description:
      "Experience the majestic beauty of ancient architecture surrounded by stunning mountain landscapes.",
  },
  {
    id: "shigar-fort-6",
    title: "Shigar Fort",
    location: "Shigar",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    price: 499,
    description:
      "Luxury accommodations in a historic setting with world-class amenities and breathtaking views.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sky-400 text-lg font-script mb-4 heading">
            Explore now
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Dream Destination.
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Finding The Perfect Travel Flight Is Like Uncovering A Hidden
            Treasure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination: Destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </div>
  )
}