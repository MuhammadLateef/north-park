import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getGalleryItem, galleryData } from "@/lib/gallery-data";
import { GalleryPage } from "@/components/gallery/gallery-page";

interface GalleryPageParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: GalleryPageParams): Promise<Metadata> {
  const { slug } = await params;
  const gallery = getGalleryItem(slug);

  if (!gallery) {
    return {
      title: "Gallery Not Found",
    };
  }

  return {
    title: `${gallery.title} - ${gallery.location}`,
    description: gallery.description,
    openGraph: {
      title: gallery.title,
      description: gallery.description,
      images: [
        {
          url: gallery.heroImage,
          width: 1200,
          height: 600,
          alt: gallery.title,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return galleryData.map((gallery) => ({
    slug: gallery.slug,
  }));
}

export default async function GalleryDetailPage({
  params,
}: GalleryPageParams) {
  const { slug } = await params;
  const gallery = getGalleryItem(slug);

  if (!gallery) {
    notFound();
  }

  return <GalleryPage gallery={gallery} />;
}
