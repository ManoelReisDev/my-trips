import Map, { type Place } from '@/components/Map';

const place = {
  id: '1',
  name: 'Petrópolis',
  slug: 'petropolis',
  location: {
    latitude: -22.5112,
    longitude: -43.1779,
  },
};

const place2: Place = {
  id: '2',
  name: 'São Luís',
  slug: 'São Luís',
  location: {
    latitude: -2.5307,
    longitude: -44.3068,
  },
};

export default function Home() {
  return <Map places={[place, place2]} />;
}
