import { defineQuery } from 'next-sanity';

export const PAGE_QUERY = defineQuery(`
  *[
    _type == "page" &&
    slug.current == $slug
  ][0] {
    "id": _id,
    heading,
    "slug": slug.current,
    body
  }
`);

export const PAGES_QUERY = defineQuery(`
  *[
    _type == "page" &&
    defined(heading) &&
    defined(slug.current)
  ] | order(heading asc) {
    "id": _id,
    heading,
    "slug": slug.current,
    body
  }
`);

export const PAGE_SLUGS_QUERY = defineQuery(`
  *[
    _type == "page" &&
    defined(slug.current)
  ] | order(_updatedAt desc)[0...1] {
    "slug": slug.current
  }
`);
