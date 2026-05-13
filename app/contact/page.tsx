"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import Image, { type StaticImageData } from "next/image"

import { About2 } from "../Index"

import {
  Phone,
  MapPin,
  Calendar,
  Smartphone,
} from "lucide-react"

/* =========================
   TYPES
========================= */

interface FormData {
  name: string
  email: string
  message: string
  sendCopy: boolean
}

interface ContactInfo {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  details: string[]
}

interface FormField {
  id: keyof FormData
  type: "text" | "email" | "textarea"
  label: string
  required: boolean
  rows?: number
}

/* =========================
   COMPONENT
========================= */

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    sendCopy: true,
  })

  /* =========================
     CONTACT INFO
  ========================= */

  const contactInfo: ContactInfo[] = [
    {
      id: "technical",
      title: "Technical Support",
      icon: Phone,
      details: [
        "gonorthp@gmail.com",
        "+92 349 0000000",
      ],
    },

    {
      id: "address",
      title: "Address",
      icon: MapPin,
      details: [
        "BASED IN Gilgit, Gilgit-Baltistan, Pakistan",
      ],
    },

    {
      id: "landline",
      title: "Emergency Contact",
      icon: Calendar,
      details: ["+92 343 +++++"],
    },

    {
      id: "mobile",
      title: "Whatsapp",
      icon: Smartphone,
      details: ["+92 349 0000000"],
    },
  ]

  /* =========================
     FORM FIELDS
  ========================= */

  const formFields: FormField[] = [
    {
      id: "name",
      type: "text",
      label: "Name",
      required: true,
    },

    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
    },

    {
      id: "message",
      type: "textarea",
      label: "Message",
      required: true,
      rows: 3,
    },
  ]

  /* =========================
     HANDLERS
  ========================= */

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target

    const checked =
      e.target instanceof HTMLInputElement
        ? e.target.checked
        : false

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }))
  }

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    console.log("Form submitted:", formData)
  }

  /* =========================
     RENDER FORM FIELD
  ========================= */

  const renderFormField = (
    field: FormField
  ) => {
    const baseClasses = `
      peer block min-h-[auto] w-full rounded border-2 border-blue-400
      bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none
      transition-all duration-200 ease-linear
      focus:placeholder:opacity-100 peer-focus:text-primary
    `

    const labelClasses = `
      pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%]
      origin-[0_0] truncate pt-[0.37rem] leading-[1.6]
      text-neutral-500 transition-all duration-200 ease-out
      peer-focus:-translate-y-[0.9rem]
      peer-focus:scale-[0.8]
      peer-focus:text-primary
      ${
        formData[field.id]
          ? "-translate-y-[0.9rem] scale-[0.8]"
          : ""
      }
    `

    return (
      <div
        key={field.id}
        className="relative mb-6"
      >
        {field.type === "textarea" ? (
          <textarea
            id={field.id}
            name={field.id}
            rows={field.rows}
            value={
              formData[field.id] as string
            }
            onChange={handleInputChange}
            className={baseClasses}
            required={field.required}
          />
        ) : (
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            value={
              formData[field.id] as string
            }
            onChange={handleInputChange}
            className={baseClasses}
            required={field.required}
          />
        )}

        <label
          htmlFor={field.id}
          className={labelClasses}
        >
          {field.label}
        </label>
      </div>
    )
  }

  /* =========================
     RENDER CONTACT INFO
  ========================= */

  const renderContactInfo = (
    info: ContactInfo
  ) => {
    const IconComponent = info.icon

    return (
      <div
        key={info.id}
        className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
      >
        <div className="flex items-start">
          <div className="shrink-0">
            <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
              <IconComponent className="h-6 w-6" />
            </div>
          </div>

          <div className="ml-6 grow">
            <p className="mb-2 font-bold">
              {info.title}
            </p>

            {info.details.map(
              (detail, index) => (
                <p
                  key={index}
                  className="text-sm text-neutral-500"
                >
                  {detail}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    )
  }

  /* =========================
     JSX
  ========================= */

  return (
    <section className="mb-10">
      {/* Hero Section */}
      <section className="relative ">
        <div className="relative sm:h-[100vh] h-[70vh] w-full overflow-hidden">
          <Image
            src={
              (About2 as StaticImageData)
                .src
            }
            alt="Contact Hero"
            fill
            className="object-cover "
            priority
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 mb-5 flex items-center justify-center">
            <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
              <h1 className="heading mb-4 text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Get In Touch
              </h1>

              <p className="max-w-[700px] text-start text-white/90 md:text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="container mx-auto max-w-[85rem] px-6">
        <div className="sm:-mt-[180px] -mt-[100px] rounded-lg border border-gray-300 bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-12 md:py-16">
          <div className="flex flex-wrap">
            {/* Form */}
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form onSubmit={handleSubmit}>
                {formFields.map(renderFormField)}

                {/* Checkbox */}
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="relative mr-[6px] mt-[0.15rem] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid outline-none checked:border-primary checked:bg-primary hover:cursor-pointer focus:shadow-none"
                    type="checkbox"
                    id="sendCopy"
                    name="sendCopy"
                    checked={formData.sendCopy}
                    onChange={handleInputChange}
                  />

                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="sendCopy"
                  >
                    Send me a copy of this
                    message
                  </label>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="mb-6 w-full rounded bg-sky-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition-colors hover:bg-sky-600 lg:mb-0"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                {contactInfo.map(
                  renderContactInfo
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div
        id="map"
        className="container relative mx-auto mt-8 h-[500px] max-w-7xl overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656928.5345005365!2d73.49195310080458!3d35.795304370308614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e5d7ad872d80b5%3A0x9882624d9785f028!2sGilgit-Baltistan!5e0!3m2!1sen!2s!4v1778619845426!5m2!1sen!2s"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        />
       </div>
    </section>
  )
}

export default ContactSection