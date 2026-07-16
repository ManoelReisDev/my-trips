'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 :root {
    --color-background: #14110f;
    --color-surface: #211a16;
    --color-primary: #f97316;
    --color-primary-hover: #fb923c;
    --color-text: #fff7ed;
    --color-text-muted: #d6c8bb;
    --color-border: #3a2d26;
    --color-shadow: rgb(0 0 0 / 28%);

    /* Aliases temporários para componentes antigos */
    --background: var(--color-background);
    --highlight: var(--color-primary);
    --white: var(--color-text);

    /* Variáveis de espaçamento e contêineres */
    --container: 100rem;
    --medium: 2rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--color-background);
    color: var(--color-text);
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  p, a {
    font-size: var(--medium);
    line-height: 1.5;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  .leaflet-container {
    width: 100%;
    height: 100vh;
  }
`;
