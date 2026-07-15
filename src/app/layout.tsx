import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import 'leaflet/dist/leaflet.css';
import { StyledComponentsRegistry } from '@/lib/styled-components-registry';
import { GlobalStyles } from '@/styles/global-styles';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Trips',
  description:
    'My Trips é um projeto de estudo que tem como objetivo criar uma aplicação web para gerenciar viagens, permitindo que os usuários adicionem, visualizem e organizem suas viagens de forma prática e eficiente.',
  icons: {
    icon: '/img/icon-512.png',
    apple: '/img/icon-512.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
