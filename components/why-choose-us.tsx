'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Compass,
  Users,
  Camera,
  Backpack,
  Drone,
} from 'lucide-react'

interface WhyChooseUsItem {
  icon: React.ReactNode
  title: string
  description: string
}

const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Expert Guides',
    description: 'Experience guides with decades of combined expertise to lead your adventures with confidence and knowledge.',
  },
  {
    icon: <Compass className="h-8 w-8" />,
    title: 'Remote Destinations',
    description: 'Access exclusive remote locations off the beaten path, offering authentic and untouched natural beauty.',
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: 'Professional Photography',
    description: 'Expert photographers capture stunning moments, ensuring you have memories that last a lifetime.',
  },
  {
    icon: <Backpack className="h-8 w-8" />,
    title: 'All-Inclusive Trips',
    description: 'Comprehensive packages with everything included, so you can focus on the experience without worries.',
  },
  {
    icon: <Drone className="h-8 w-8" />,
    title: 'Drone Shots',
    description: 'Breathtaking aerial footage showcasing landscapes from unique perspectives never seen before.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-slate-600 sm:mt-6 sm:text-xl">
            Discover what makes our travel experiences truly unforgettable
          </p>
        </div>

        {/* Grid of items */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-5">
          {whyChooseUsItems.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              <Card className="relative h-full border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="flex flex-col items-start gap-4 p-6 sm:p-8 h-full">
                  {/* Icon Container */}
                  <div className="rounded-xl bg-gradient-to-br from-sky-50 to-blue-100 p-4 text-sky-600 transition-all duration-300 group-hover:shadow-lg">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
