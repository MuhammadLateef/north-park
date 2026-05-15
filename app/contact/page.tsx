"use client"

import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { About2 } from "../Index"
import { Phone, MapPin, Calendar, Smartphone } from "lucide-react"

const WHATSAPP_NUMBER = "923555238042"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name.trim()) {
      alert("Please enter your name")
      return
    }
    if (!formData.email.trim()) {
      alert("Please enter your email")
      return
    }
    if (!formData.message.trim()) {
      alert("Please enter your message")
      return
    }

    // Create WhatsApp message
    const text = `*New Contact Request* 🏔️\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`
    const encoded = encodeURIComponent(text)

    // Open WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank")

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      id: "email",
      title: "Email",
      icon: Phone,
      details: ["gonorthp@gmail.com"],
    },
    {
      id: "address",
      title: "Address",
      icon: MapPin,
      details: ["Gilgit, Gilgit-Baltistan, Pakistan"],
    },
    {
      id: "phone",
      title: "Phone",
      icon: Calendar,
      details: ["+92 355 5238042"],
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      icon: Smartphone,
      details: ["923555238042"],
    },
  ]

  return (
    <section className="mb-10">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-screen w-full overflow-hidden">
        <Image
          src={(About2 as StaticImageData).src}
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 heading">
              Get In Touch
            </h1>
            <p className="text-white/80 text-lg">
              We&apos;d love to hear from you
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send 
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <div key={info.id} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-sky-100">
                        <Icon className="h-6 w-6 text-sky-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-96 mt-12 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656928.5345005365!2d73.49195310080458!3d35.795304370308614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e5d7ad872d80b5%3A0x9882624d9785f028!2sGilgit-Baltistan!5e0!3m2!1sen!2s!4v1778619845426!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Location Map"
        />
      </div>
    </section>
  )
}

export default ContactSection
