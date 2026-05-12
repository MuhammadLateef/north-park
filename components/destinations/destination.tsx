import DestinationCard from "./destination-card"
import { StaticImageData } from "next/image";
import {
  destination1,
  destination2,
  destination3,
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
    id: "shigar-fort-1",
    title: "Shangrila Skardu",
    location: "Skardu",
    rating: 5,
    image: destination1.src,
    price: 199,
    description:
      "Discover breathtaking destinations, ancient forts, and unforgettable adventures - tailored just for you.",
  },
  {
    id: "shigar-fort-2",
    title: "Upper Kachura Lake",
    location: "Skardu",
    rating: 4.8,
    image: destination2.src,
    price: 159,
    description:
      "Experience the majestic beauty of ancient architecture surrounded by stunning mountain landscapes.",
  },
  {
    id: "shigar-fort-3",
    title: "Fairy Medows",
    location: "Gilgit",
    rating: 4.8,
    image: destination3.src,
    price: 100,
    description:
      "Luxury accommodations in a historic setting with world-class amenities and breathtaking views.",
  },
]

export default function Destination() {
  return (
    <div className="py-12">
      <div className="max-w-[80rem] mx-auto container px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl heading">
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
