'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 :root {
    /* Cores principais do tema */
    --background: #06092b;
    --highlight: #e20e8d;
    --white: #f5f5f5;

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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--background);
    color: var(--white);
  }

  p, a {
    font-size: var(--medium);
    line-height: var(1.5);
  }

  a {
    color: var(--highlight);
    text-decoration: none;
  }

  .leaflet-container {
    width: 100%;
    height: 100vh;
  }
`;
