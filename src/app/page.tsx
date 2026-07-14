import type { Place } from '@/components/Map';
import HomeTemplate from '@/templates/Home';
import { client } from '@/sanity/client';
import { PLACES_QUERY } from '@/sanity/queries/places';
import type { PLACES_QUERY_RESULT } from '@/sanity/sanity.types';

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const places = await client.fetch<PLACES_QUERY_RESULT>(
    PLACES_QUERY,
    {},
    options,
  );
  const mapPlaces: Place[] = places.filter(
    (place): place is Place =>
      place.location.latitude !== null && place.location.longitude !== null,
  );

  return <HomeTemplate places={mapPlaces} />;
}
