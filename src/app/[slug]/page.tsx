import { notFound } from 'next/navigation';
import PageContent from '@/components/PageContent';

import { client } from '@/sanity/client';
import { PAGE_QUERY, PAGE_SLUGS_QUERY } from '@/sanity/queries/pages';
import type {
  PAGE_QUERY_RESULT,
  PAGE_SLUGS_QUERY_RESULT,
} from '@/sanity/sanity.types';

import type { Metadata } from 'next';
import { buildCanonicalUrl } from '@/lib/seo';
import { MoveLeft } from 'lucide-react';
import LinkWrapper from '@/components/LinkWrapper';

export const revalidate = 30;
export const dynamicParams = true;

export async function generateStaticParams() {
  const pages = await client.fetch<PAGE_SLUGS_QUERY_RESULT>(PAGE_SLUGS_QUERY);
  return pages.map((page) => ({
    slug: page.slug,
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

  const page = await client.fetch<PAGE_QUERY_RESULT>(PAGE_QUERY, {
    slug,
  });

  if (!page) {
    return {};
  }

  const description = `${page.heading} no My Trips.`;

  return {
    title: page.heading,
    description,
    alternates: {
      canonical: buildCanonicalUrl(`/${page.slug}`),
    },
    openGraph: {
      title: page.heading,
      description,
      url: buildCanonicalUrl(`/${page.slug}`),
    },
    twitter: {
      card: 'summary_large_image',
      title: page.heading,
      description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const page = await client.fetch<PAGE_QUERY_RESULT>(PAGE_QUERY, {
    slug,
  });

  if (!page) {
    notFound();
  }

  return (
    <main>
      <PageContent
        heading={page.heading}
        body={page.body}
        linkWrapper={
          <LinkWrapper href="/" aria-label="Voltar ao mapa">
            <MoveLeft size={24} />
          </LinkWrapper>
        }
      />
    </main>
  );
}
