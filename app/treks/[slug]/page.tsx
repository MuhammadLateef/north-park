import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Mountain, Users, ArrowRight, ChevronLeft } from "lucide-react"
import { treks, type Trek, type Highlight } from "@/lib/treks-data"

type TrekPageProps = {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return treks.map((trek: Trek) => ({
        slug: trek.slug,
    }))
}

export default async function TrekPage({ params }: TrekPageProps) {
    const { slug } = await params
    const trek = treks.find((t) => t.slug === slug)

    if (!trek) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background">
            <main className="">
                {/* Hero Section */}
                <section className="relative">
                    <div className="relative h-[70vh] w-full overflow-hidden">
                        <Image
                            src={trek.mainImage || "/placeholder.svg"}
                            alt={`${trek.title} landscape view`}
                            fill
                            className="object-cover"
                            priority
                        />

                        <div className="absolute inset-0 bg-black/40" />

                        <div className="absolute inset-0 flex items-end mb-5 justify-center">
                            <div className="container max-w-7xl px-4 md:px-6 text-start">
                                <Badge
                                    variant={
                                        trek.difficulty === "Extreme" ||
                                        trek.difficulty === "Hard"
                                            ? "destructive"
                                            : trek.difficulty === "Moderate"
                                              ? "secondary"
                                              : "default"
                                    }
                                    className="mb-4"
                                >
                                    {trek.difficulty}
                                </Badge>

                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 text-start heading">
                                    {trek.title}
                                </h1>

                                <p className="max-w-175 text-white/90 md:text-lg text-start">
                                    {trek.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trek Details */}
                <section className="py-12 md:py-16 max-w-[90%] mx-auto">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Main Content */}
                            <div className="flex-1 space-y-8">
                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center gap-1 bg-muted px-3 py-1 text-blue-400 rounded-full">
                                        <Clock className="h-4 w-4 text-blue-400" />
                                        {trek.duration}
                                    </div>

                                    <div className="flex items-center gap-1 bg-muted px-3 py-1 text-blue-400 rounded-full">
                                        <Mountain className="h-4 w-4 text-blue-400" />
                                        {trek.elevation}
                                    </div>

                                    <div className="flex items-center gap-1 bg-muted px-3 py-1 text-blue-400 rounded-full">
                                        <Users className="h-4 w-4 text-blue-400" />
                                        {trek.difficulty}
                                    </div>
                                </div>

                                <div className="prose prose-gray max-w-none dark:prose-invert">
                                    <p className="text-base leading-relaxed">
                                        {trek.description}
                                    </p>

                                    <div className="my-8">
                                        <Image
                                            src={
                                                trek.secondaryImage ||
                                                "/placeholder.svg"
                                            }
                                            alt={`${trek.title} scenic view`}
                                            width={800}
                                            height={500}
                                            className="rounded-lg object-cover w-full"
                                        />
                                    </div>

                                    <h2 className="text-2xl sm:text-4xl font-bold text-blue-400 heading mt-8 mb-4">
                                        The Experience
                                    </h2>

                                    {trek.content
                                        .split("\n\n")
                                        .map((paragraph: string, index: number) => (
                                            <p key={index} className="text-base">
                                                {paragraph}
                                            </p>
                                        ))}

                                    <h2 className="text-2xl sm:text-4xl font-bold heading mt-8 mb-4 text-blue-400">
                                        Highlights
                                    </h2>

                                    <ul className="space-y-4">
                                        {trek.highlights.map(
                                            (highlight: Highlight, index: number) => (
                                                <li key={index} className="flex flex-col">
                                                    <strong>{highlight.title}:</strong>{" "}
                                                    {highlight.description}
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    <h2 className="text-2xl sm:text-4xl font-bold heading mt-8 mb-4 text-blue-400">
                                        Best Time to Visit
                                    </h2>

                                    <p>{trek.bestTimeToVisit}</p>

                                    <h2 className="text-2xl sm:text-4xl font-bold heading mt-8 mb-4 text-blue-400">
                                        Itinerary
                                    </h2>

                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-blue-400">
                                            <thead>
                                                <tr className="bg-blue-400/10">
                                                    <th className="border border-blue-400 px-4 py-2 text-left font-semibold">Day</th>
                                                    <th className="border border-blue-400 px-4 py-2 text-left font-semibold">Title</th>
                                                    <th className="border border-blue-400 px-4 py-2 text-left font-semibold">Altitude</th>
                                                    <th className="border border-blue-400 px-4 py-2 text-left font-semibold">Activities</th>
                                                    <th className="border border-blue-400 px-4 py-2 text-left font-semibold">Accommodation</th>
                                                    <th className="border border-blue-400 px-4 py-2 text-left font-semibold">Meals</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {trek.itinerary.map((day) => (
                                                    <tr key={day.day} className="hover:bg-blue-400/5 transition-colors">
                                                        <td className="border border-blue-400 px-4 py-2 font-medium">
                                                            Day {day.day}
                                                        </td>
                                                        <td className="border border-blue-400 px-4 py-2">{day.title}</td>
                                                        <td className="border border-blue-400 px-4 py-2">{day.altitude}</td>
                                                        <td className="border border-blue-400 px-4 py-2">
                                                            <ul className="list-disc list-inside space-y-1">
                                                                {day.activities.map((activity, index) => (
                                                                    <li key={index} className="text-sm">
                                                                        {activity}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </td>
                                                        <td className="border border-blue-400 px-4 py-2">{day.accommodation}</td>
                                                        <td className="border border-blue-400 px-4 py-2">{day.meals}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                                    <Link href="/contactus">
                                        <Button
                                            className="bg-blue-400 cursor-pointer"
                                            size="lg"
                                        >
                                            Book This Trek
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>

                                    <Button
                                        className="hover:bg-blue-400 hover:text-white cursor-pointer"
                                        variant="outline"
                                        size="lg"
                                    >
                                        Download Trek Guide
                                    </Button>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="w-full md:w-1/3 space-y-6">
                                <div className="rounded-lg border border-blue-400 bg-card p-6">
                                    <h3 className="text-lg font-semibold mb-4 text-blue-400">
                                        Related Treks
                                    </h3>

                                    <div className="space-y-4">
                                        {treks
                                            .filter(
                                                (relatedTrek) =>
                                                    relatedTrek.id !== trek.id
                                            )
                                            .slice(0, 3)
                                            .map((relatedTrek: Trek) => (
                                                <Link
                                                    key={relatedTrek.id}
                                                    href={`/treks/${relatedTrek.slug}`}
                                                    className="flex items-center gap-3 group"
                                                >
                                                    <div className="w-16 h-16 relative rounded-md overflow-hidden">
                                                        <Image
                                                            src={
                                                                relatedTrek.mainImage ||
                                                                "/placeholder.svg"
                                                            }
                                                            alt={relatedTrek.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>

                                                    <div>
                                                        <h4 className="font-medium group-hover:text-blue-400 transition-colors">
                                                            {relatedTrek.title}
                                                        </h4>

                                                        <p className="text-sm text-muted-foreground group-hover:text-blue-400 transition-colors duration-300">
                                                            {relatedTrek.difficulty}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>

                                    <Button
                                        variant="link"
                                        asChild
                                        className="mt-4 w-full"
                                    >
                                        <Link
                                            href="/"
                                            className="hover:text-blue-400 transition-colors duration-300"
                                        >
                                            View All Treks
                                        </Link>
                                    </Button>
                                </div>

                                <div className="rounded-lg border border-blue-400 bg-card p-6">
                                    <h3 className="text-lg font-semibold mb-4 text-blue-400">
                                        Need Help Planning?
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-4">
                                        Our expert guides can help you plan the perfect
                                        trekking adventure tailored to your needs.
                                    </p>

                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://wa.me/923554229889?text"
                                    >
                                        <Button className="w-full bg-blue-400 hover:bg-white hover:text-black border border-blue-400 cursor-pointer transition-colors duration-300">
                                            Contact a Guide
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t">
                            <Button variant="outline" asChild>
                                <Link href="/">
                                    <ChevronLeft className="mr-2 h-4 w-4" />
                                    Back to All Treks
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
