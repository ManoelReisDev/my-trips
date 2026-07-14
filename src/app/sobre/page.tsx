import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';
import LinkWrapper from '@/components/LinkWrapper';
import { client } from '@/sanity/client';
import { PAGE_QUERY } from '@/sanity/queries/pages';
import type { ContentPage } from '@/sanity/types';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sobre o My Trips',
  description:
    'Conheça o My Trips, uma aplicação para registrar e visualizar lugares visitados.',
};

export default async function Sobre() {
  const page = await client.fetch<ContentPage | null>(
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

        <h1 className={styles.title}>{page.heading}</h1>

        <div className={styles.description}>
          <PortableText value={page.body} />
        </div>
      </article>

      <LinkWrapper href="/">Voltar ao mapa</LinkWrapper>
    </main>
  );
}
