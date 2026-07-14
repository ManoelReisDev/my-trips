import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageContent from '@/components/PageContent';
import LinkWrapper from '@/components/LinkWrapper';
import { client } from '@/sanity/client';
import { PAGE_QUERY } from '@/sanity/queries/pages';
import type { PAGE_QUERY_RESULT } from '@/sanity/sanity.types';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sobre o My Trips',
  description:
    'Conheça o My Trips, uma aplicação para registrar e visualizar lugares visitados.',
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

      <LinkWrapper href="/">Voltar ao mapa</LinkWrapper>
    </main>
  );
}
