import { defineQuery } from 'next-sanity';

export const PLACES_QUERY = defineQuery(`*[
  _type == "place" &&
  defined(name) &&
  defined(slug.current) &&
  defined(location.lat) &&
  defined(location.lng)
] | order(name asc) {
  "id": _id,
  name,
  "slug": slug.current,
  "location": {
    "latitude": location.lat,
    "longitude": location.lng
  }
}`);
