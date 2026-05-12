'use client'

import React from 'react'
import { Heart, Globe, Sparkles, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutUs() {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Passion for Adventure',
      description: 'We genuinely love what we do. Every trip is crafted with passion and attention to detail.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Network',
      description: 'With connections across the world, we bring you the most authentic experiences.',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Premium Quality',
      description: 'Excellence in every detail, from planning to execution of your perfect journey.',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Local Expertise',
      description: 'Our guides are locals who know their lands inside and out, sharing hidden gems.',
    },
  ]

  return (
    <section className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Wandering the world with purpose. Creating memories that last a lifetime.
          </p>
        </div>
      </div>

      {/* Our Journey */}
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-justify">
          <div className="space-y-8">
            <div className="border-l-4 border-sky-500 pl-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                How It All Started
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
               Abdul Hadi was born in the peaceful village of Chorit, Astore, and raised in Gilgit — the heart of Gilgit-Baltistan. Surrounded by towering mountains, deep valleys, and timeless landscapes, his connection to the region began at an early age. What started as a deep love for his homeland gradually evolved into a passion for sharing its beauty, culture, and adventure with travelers from around the world.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Alongside him is Vienna, an accountant by profession, born and raised in the Philippines, who has always loved exploring less-traveled places and connecting with people from different walks of life.
              </p>
               <p className="text-lg text-slate-600 leading-relaxed">
               Her journey with Pakistan began in 2019 when she visited the country as a solo female traveler. Captivated by the breathtaking landscapes of northern Pakistan, especially Gilgit-Baltistan, she quickly fell in love with the country’s mountains, hiking trails, photography spots, and unmatched hospitality. When Pakistan introduced an easier visa process for Filipinos, she returned again in 2025 — and the feeling remained just as magical as her first visit.
              </p>
              <p className='text-lg text-slate-600 leading-relaxed'>That experience inspired a shared vision: to create a travel agency that allows others to experience Pakistan the same authentic and unforgettable way they did together.</p>
            </div>

            <div className="border-l-4 border-sky-500 pl-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Together, Vienna and Abdul Hadi are committed to helping travelers discover Pakistan not just as a destination, but as a place that feels like home — full of warmth, hospitality, and unforgettable moments.</p>

            </div>

            <div className="border-l-4 border-sky-500 pl-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Why We're Different
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                What makes us different is our combination of local expertise and genuine personal experience.
 </p>
   <p className="text-lg text-slate-600 leading-relaxed">
           As someone born and raised in Gilgit-Baltistan, Abdul Hadi brings deep local knowledge, trusted connections, and firsthand understanding of the region’s culture, history, and hidden gems. Meanwhile, Vienna offers the perspective of an international traveler who personally experienced Pakistan’s beauty and hospitality as a visitor.
 </p>
   <p className="text-lg text-slate-600 leading-relaxed">
            We don’t just organize tours — we create authentic experiences built on trust, passion, and connection. Every journey is carefully designed to make travelers feel safe, welcomed, and inspired.
 </p>
 <p>With us, Pakistan becomes more than a trip — it becomes your home away from home.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 inline-block rounded-lg bg-sky-50 p-3 text-sky-600 group-hover:bg-sky-100 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600">
              Passionate adventurers united by a love for exploration and storytelling
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="leading-relaxed">
              Our team is composed of experienced mountaineers, wildlife photographers, cultural anthropologists, and adventure enthusiasts. Each member brings unique expertise and a shared commitment to creating unforgettable experiences. We work with local guides, homestay families, and community partners who are the true heart of our operations.
            </p>
            <p className="leading-relaxed mt-6">
              From our logistics coordinators who plan every detail to our photographers capturing magic moments, everyone plays a vital role in making your adventure seamless and extraordinary.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-lg text-sky-100 mb-8">
            Join us on a journey to some of Earth's most extraordinary destinations
          </p>
          <Button className="bg-white text-sky-600 hover:bg-slate-100 text-base font-semibold px-8 py-6">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  )
}
