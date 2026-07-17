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

  .custom-marker {
    position: relative;
    background: transparent;
    border: 0;
  }

  .custom-marker .pin {
    width: 3rem;
    height: 3rem;
    border-radius: 50% 50% 50% 0;
    background: var(--color-primary);
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -2rem 0 0 -1.5rem;
    animation: marker-bounce 1s both;
    box-shadow: 0 0.4rem 1.2rem var(--color-shadow);
  }

  .custom-marker .pin::after {
    content: '';
    width: 1.4rem;
    height: 1.4rem;
    margin: 0.8rem 0 0 0.8rem;
    background: var(--color-background);
    position: absolute;
    border-radius: 50%;
  }

  .custom-marker .pulse {
    background: rgb(0 0 0 / 20%);
    border-radius: 50%;
    height: 1.4rem;
    width: 1.4rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: 1.1rem 0 0 -0.7rem;
    transform: rotateX(55deg);
    z-index: -1;
  }

  .custom-marker .pulse::after {
    content: '';
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    position: absolute;
    margin: -1.3rem 0 0 -1.3rem;
    animation: marker-pulsate 1s ease-out infinite;
    opacity: 0;
    box-shadow: 0 0 0.1rem 0.2rem var(--color-primary);
    animation-delay: 1.1s;
  }

  @keyframes marker-pulsate {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }

  @keyframes marker-bounce {
    0% {
      opacity: 0;
      transform: translateY(-20rem) rotate(-45deg);
    }

    60% {
      opacity: 1;
      transform: translateY(3rem) rotate(-45deg);
    }

    80% {
      transform: translateY(-1rem) rotate(-45deg);
    }

    100% {
      transform: translateY(0) rotate(-45deg);
    }
  }
`;
