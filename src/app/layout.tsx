import type { Metadata } from 'next';
import 'leaflet/dist/leaflet.css';
import { StyledComponentsRegistry } from '@/lib/styled-components-registry';
import { GlobalStyles } from '@/styles/global-styles';

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
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
