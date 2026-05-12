"use client"

import React, { useState, KeyboardEvent } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { MapPin, Star } from "lucide-react"
import { StaticImageData } from "next/image"
type Destination = {
  id: string | number
  title: string
  location: string
  Cardimage?: string| StaticImageData
  rating: number | string
}

type DestinationCardProps = {
  destination: Destination
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleCardClick = (): void => {
    router.push(`/destination/${destination.id}`);
  }

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>
  ): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleCardClick()
    }
  }

  return (
    <div
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${destination.title} in ${destination.location}`}
    >
      {/* Image Container */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <Image
          src={destination.Cardimage || "/placeholder.svg"}
          alt={`${destination.title} - ${destination.location}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Rating Badge */}
        <div className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">
            {destination.rating}
          </span>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white text-2xl font-bold tracking-widest underline">
            More
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 absolute -bottom-8">
        <h3 className="text-xl font-semibold text-white mb-3">
          {destination.title}
        </h3>

        <div className="flex items-center text-white mb-4">
          <MapPin className="w-4 h-4 mr-2 text-white" />
          <span className="text-sm">{destination.location}</span>
        </div>
      </div>
    </div>
  )
}