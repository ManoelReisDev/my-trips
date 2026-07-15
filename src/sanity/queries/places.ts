import { defineQuery } from 'next-sanity';

//
export const PLACE_QUERY = defineQuery(`
  *[
    _type == "place" &&
    slug.current == $slug
  ][0] {
    "id": _id,
    name,
    "slug": slug.current,
    description,
    gallery[] {
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }
`);

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

export const PLACE_SLUGS_QUERY = defineQuery(`
  *[
    _type == "place" &&
    defined(slug.current)
  ] | order(_updatedAt desc)[0...3] {
    "slug": slug.current
  }
`);
