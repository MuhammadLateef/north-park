"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Mountain } from "lucide-react"
import { treks } from "@/lib/treks-data"
import { tourData } from "@/data/tour"  // ✅ correct export name

const WHATSAPP_NUMBER = "923554229889"

const GROUP_SIZES = [
    "1 person",
    "2 people",
    "3–5 people",
    "6–10 people",
    "10+ people",
]

// tour.ts title is string | string[] — normalise to a plain string
function getTourTitle(title: string | string[]): string {
    return Array.isArray(title) ? title.join(" & ") : title
}

const WA_ICON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.529 5.845L.057 23.512a.5.5 0 00.602.633l5.898-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.031-1.384l-.36-.214-3.733.977.998-3.63-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
)

export default function BookingForm() {
    const [name, setName]             = useState("")
    const [phone, setPhone]           = useState("")
    const [country, setCountry]       = useState("")
    const [trek, setTrek]             = useState("")
    const [tourPackage, setTourPackage] = useState("")
    const [date, setDate]             = useState("")
    const [duration, setDuration]     = useState("")
    const [groupSize, setGroupSize]   = useState(GROUP_SIZES[0])
    const [notes, setNotes]           = useState("")

    const handleSubmit = () => {
        if (!name.trim()) {
            alert("Please enter your name.")
            return
        }
        if (!trek && !tourPackage) {
            alert("Please select at least a trek or a tour package.")
            return
        }

        let text = `Hi! I'd like to make a booking 🏔️\n\n`
        text += `*Name:* ${name}\n`
        if (phone.trim())       text += `*Phone:* ${phone}\n`
        if (country.trim())     text += `*Country:* ${country}\n`
        if (trek)               text += `*Trek:* ${trek}\n`
        if (tourPackage)        text += `*Tour Package:* ${tourPackage}\n`
        if (date)               text += `*Start date:* ${date}\n`
        if (duration.trim())    text += `*Duration:* ${duration} days\n`
        text += `*Group size:* ${groupSize}\n`
        if (notes.trim())       text += `*Notes:* ${notes}\n`

        const encoded = encodeURIComponent(text)
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank")
    }

    return (
        <div className="max-w-lg mx-auto rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                    <Mountain className="h-5 w-5 text-emerald-600" />
                    Book Now
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                    Fill in a few details and we'll connect on WhatsApp instantly.
                </p>
            </div>

            <div className="space-y-4">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="name">Your name</Label>
                        <Input
                            id="name"
                            placeholder="Ali Khan"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="phone">Phone / WhatsApp</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+92 300 0000000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                    <Label htmlFor="country">Country</Label>
                    <Input
                        id="country"
                        placeholder="e.g. Pakistan, Germany, USA…"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>

                {/* ── Trek (always visible) ── */}
                <div className="space-y-1.5">
                    <Label htmlFor="trek">Trek</Label>
                    <Select onValueChange={setTrek} value={trek}>
                        <SelectTrigger id="trek">
                            <SelectValue placeholder="— Select a trek —" />
                        </SelectTrigger>
                        <SelectContent>
                            {treks.map((t) => (
                                <SelectItem key={t.id} value={t.title}>
                                    {t.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* ── Tour Package (always visible) ── */}
                <div className="space-y-1.5">
                    <Label htmlFor="tour">Tour package</Label>
                    <Select onValueChange={setTourPackage} value={tourPackage}>
                        <SelectTrigger id="tour">
                            <SelectValue placeholder="— Select a destination —" />
                        </SelectTrigger>
                        <SelectContent>
                            {tourData.map((t) => (
                                <SelectItem
                                    key={t.id}
                                    value={getTourTitle(t.title)}
                                >
                                    {getTourTitle(t.title)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                        You can select both a trek and a tour if needed.
                    </p>
                </div>

                {/* Date + Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="date">Preferred start date</Label>
                        <Input
                            id="date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="duration">Duration (days)</Label>
                        <Input
                            id="duration"
                            type="number"
                            min="1"
                            placeholder="e.g. 7"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                </div>

                {/* Group size */}
                <div className="space-y-1.5">
                    <Label htmlFor="group">Group size</Label>
                    <Select onValueChange={setGroupSize} value={groupSize}>
                        <SelectTrigger id="group">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {GROUP_SIZES.map((size) => (
                                <SelectItem key={size} value={size}>
                                    {size}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                    <Label htmlFor="notes">Anything else? (optional)</Label>
                    <Textarea
                        id="notes"
                        placeholder="Special requirements, fitness level, questions…"
                        className="min-h-[80px] resize-none"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>

                {/* Submit */}
                <Button
                    onClick={handleSubmit}
                    className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium gap-2"
                    size="lg"
                >
                    {WA_ICON}
                    Send via WhatsApp
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                    Opens WhatsApp with your details pre-filled — no account needed.
                </p>
            </div>
        </div>
    )
}