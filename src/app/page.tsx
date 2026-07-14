import LinkWrapper from '@/components/LinkWrapper';
import Map, { type Place } from '@/components/Map';
import { client } from '@/sanity/client';
import { PLACES_QUERY } from '@/sanity/queries/places';

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const places = await client.fetch<Place[]>(PLACES_QUERY, {}, options);

  return (
    <>
      <Map places={places} />
      <LinkWrapper href="/sobre">Sobre</LinkWrapper>
    </>
  );
}
