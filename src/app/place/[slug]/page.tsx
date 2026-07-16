import { notFound } from 'next/navigation';

import PlaceTemplate from '@/templates/Place';
import { client } from '@/sanity/client';
import { PLACE_QUERY, PLACE_SLUGS_QUERY } from '@/sanity/queries/places';
import type {
  PLACE_QUERY_RESULT,
  PLACE_SLUGS_QUERY_RESULT,
} from '@/sanity/sanity.types';

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
