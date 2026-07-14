import type { Metadata } from 'next';
import LinkWrapper from '@/components/LinkWrapper';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sobre o My Trips',
  description:
    'Conheça o My Trips, uma aplicação para registrar e visualizar lugares visitados.',
};

export default function Sobre() {
  return (
    <main className={styles.wrapper}>
      <article className={styles.content}>
        <p className={styles.eyebrow}>Sobre o projeto</p>

        <h1 className={styles.title}>Sobre o My Trips</h1>

        <p className={styles.description}>
          O My Trips é uma aplicação para registrar e visualizar lugares
          visitados.
        </p>
      </article>

      <LinkWrapper href="/">Voltar ao mapa</LinkWrapper>
    </main>
  );
}
