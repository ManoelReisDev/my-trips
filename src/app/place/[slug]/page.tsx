import { notFound } from 'next/navigation';

import PlaceTemplate from '@/templates/Place';

import { client } from '@/sanity/client';
import { PLACE_QUERY, PLACE_SLUGS_QUERY } from '@/sanity/queries/places';
import type {
  PLACE_QUERY_RESULT,
  PLACE_SLUGS_QUERY_RESULT,
} from '@/sanity/sanity.types';

import type { Metadata } from 'next';
import { buildCanonicalUrl, getFirstValidOgImage } from '@/lib/seo';

export const revalidate = 30;
export const dynamicParams = true;

export async function generateStaticParams() {
  const places =
    await client.fetch<PLACE_SLUGS_QUERY_RESULT>(PLACE_SLUGS_QUERY);

  return places.map((place) => ({
    slug: place.slug,
  }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const place = await client.fetch<PLACE_QUERY_RESULT>(PLACE_QUERY, {
    slug,
  });

  if (!place) {
    return {};
  }

  const description = `Veja fotos e detalhes sobre ${place.name} no My Trips.`;
  const ogImage = getFirstValidOgImage(place.gallery);

  return {
    title: place.name,
    description,
    alternates: {
      canonical: buildCanonicalUrl(`/place/${place.slug}`),
    },
    openGraph: {
      title: place.name,
      description,
      url: buildCanonicalUrl(`/place/${place.slug}`),
      images: ogImage
        ? [
            {
              url: ogImage.url,
              width: ogImage.width,
              height: ogImage.height,
              alt: place.name,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: place.name,
      description,
      images: ogImage ? [ogImage.url] : undefined,
    },
  };
}

export default async function PlacePage({ params }: PageProps) {
  const { slug } = await params;

  const place = await client.fetch<PLACE_QUERY_RESULT>(PLACE_QUERY, {
    slug,
  });

  if (!place) {
    notFound();
  }

  return <PlaceTemplate place={place} />;
}
