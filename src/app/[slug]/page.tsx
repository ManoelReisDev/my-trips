import { notFound } from 'next/navigation';
import PageContent from '@/components/PageContent';

import { client } from '@/sanity/client';
import { PAGE_QUERY, PAGE_SLUGS_QUERY } from '@/sanity/queries/pages';
import type { ContentPage, PageSlug } from '@/sanity/types';

export const revalidate = 30;
export const dynamicParams = true;

export async function generateStaticParams() {
  const pages = await client.fetch<PageSlug[]>(PAGE_SLUGS_QUERY);

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const page = await client.fetch<ContentPage | null>(PAGE_QUERY, {
    slug,
  });

  if (!page) {
    notFound();
  }

  return (
    <main>
      <PageContent heading={page.heading} body={page.body} />
    </main>
  );
}
