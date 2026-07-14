import type { PortableTextBlock } from 'next-sanity';

export type ContentPage = {
  id: string;
  heading: string;
  slug: string;
  body: PortableTextBlock[];
};
