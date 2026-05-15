import DestinationCard from "./destination-card"
import { StaticImageData } from "next/image";
import {
  destination3,
  Tour26,
  Tour8,
} from "@/app/Index"

type DestinationType = {
  id: string
  title: string
  location: string
  rating: number
  image: string | StaticImageData
  price: number
  description: string
}

const destinations: DestinationType[] = [
  {
    id: "shangrila-skardu",
    title: "Shangrila Skardu",
    location: "Skardu",
    rating: 5,
    image: Tour8.src,
    price: 199,
    description:
      "Discover breathtaking destinations, ancient forts, and unforgettable adventures - tailored just for you.",
  },
  {
    id: "upper-kachura-lake",
    title: "Upper Kachura Lake",
    location: "Skardu",
    rating: 4.8,
    image: destination3.src,
    price: 159,
    description:
      "Experience the majestic beauty of ancient architecture surrounded by stunning mountain landscapes.",
  },
  {
    id: "hunza-skardu-jeep-safari",
    title: "Hunza & Skardu, Gilgit Baltistan",
    location: "Gilgit",
    rating: 4.8,
    image: Tour26.src,
    price: 100,
    description:
      "Luxury accommodations in a historic setting with world-class amenities and breathtaking views.",
  },
]

export default function Destination() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto container px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-balance text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl lg:text-5xl heading">
            Explore now
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black my-6">
            Find Your Dream Destination.
          </h1>

          <p className="text-gray-600 sm:text-lg text-base max-w-2xl mx-auto">
            Finding The Perfect Travel Flight Is Like Uncovering A Hidden
            Treasure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination: DestinationType) => (
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
