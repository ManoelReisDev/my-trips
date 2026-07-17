import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 9rem 2rem 8rem;
  background: var(--color-background);
  color: var(--color-text);
`;

export const Container = styled.section`
  width: min(72rem, 100%);
  margin: 2rem auto;
`;

export const Heading = styled.h1`
  margin-bottom: 2.4rem;
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 700;
  line-height: 1;
  text-align: center;
`;

export const Body = styled.div`
  max-width: 72rem;
  margin: 0 auto 3.6rem;
  color: var(--color-text-muted);
  font-weight: 300;
  line-height: 1.6;

  p {
    font-size: 2rem;
  }

  p + p {
    margin-top: 1.6rem;
  }

  @media (max-width: 600px) {
    p {
      font-size: 1.8rem;
    }
  }
`;
