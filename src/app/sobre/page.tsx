import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import PageContent from '@/components/PageContent';
import LinkWrapper from '@/components/LinkWrapper';

import { client } from '@/sanity/client';
import { PAGE_QUERY } from '@/sanity/queries/pages';
import type { PAGE_QUERY_RESULT } from '@/sanity/sanity.types';

import styles from './page.module.css';

import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Sobre o My Trips',
  description:
    'Conheça o My Trips, uma aplicação para registrar e visualizar lugares visitados.',
  alternates: {
    canonical: buildCanonicalUrl('/sobre'),
  },
  openGraph: {
    title: 'Sobre o My Trips',
    description:
      'Conheça o My Trips, uma aplicação para registrar e visualizar lugares visitados.',
    url: buildCanonicalUrl('/sobre'),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre o My Trips',
    description:
      'Conheça o My Trips, uma aplicação para registrar e visualizar lugares visitados.',
  },
};
export default async function Sobre() {
  const page = await client.fetch<PAGE_QUERY_RESULT>(
    PAGE_QUERY,
    { slug: 'sobre' },
    { next: { revalidate: 30 } },
  );

  if (!page) {
    notFound();
  }

  return (
    <main className={styles.wrapper}>
      <article className={styles.content}>
        <p className={styles.eyebrow}>Sobre o projeto</p>

        <PageContent
          heading={page.heading}
          body={page.body}
          className={{
            title: styles.title,
            body: styles.description,
          }}
        />
      </article>

      <footer className={styles.footer}>
        <Link href="/terms-of-service">Termos de uso</Link>
      </footer>

      <LinkWrapper href="/">Voltar ao mapa</LinkWrapper>
    </main>
  );
}
