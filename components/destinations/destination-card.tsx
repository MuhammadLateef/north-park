"use client"

import React, { useState, KeyboardEvent } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { MapPin, Star } from "lucide-react"
import { StaticImageData } from "next/image"

type Destination = {
  id: string
  title: string
  location: string
  image: string | StaticImageData   // ← unified to "image" (was "Cardimage")
  rating: number
}

type DestinationCardProps = {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleCardClick = () => {
    router.push(`/tour/${destination.id}`)  // ← fixed: was /destination/, now /tour/
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleCardClick()
    }
  }

  return (
    <div
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${destination.title} in ${destination.location}`}
    >
      {/* Image */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}   // ← fixed: was "Cardimage"
          alt={`${destination.title} - ${destination.location}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Dark gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Rating badge */}
        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{destination.rating}</span>
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white text-xl font-bold tracking-widest underline underline-offset-4">
            View Details
          </span>
        </div>

        {/* Title & location pinned to bottom-left */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold leading-tight">{destination.title}</h3>
          <div className="flex items-center gap-1 mt-1 opacity-90">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-sm">{destination.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}