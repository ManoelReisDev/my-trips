import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  padding: 8rem 2rem;
  background: var(--color-background);
  color: var(--color-text);
`;

export const Container = styled.section`
  width: min(100rem, 100%);
  margin: 0 auto;
`;

export const Heading = styled.h1`
  margin-bottom: var(--medium);
  font-size: clamp(3.6rem, 8vw, 7.2rem);
  font-weight: 700;
  line-height: 1;
`;

export const Body = styled.div`
  max-width: 72rem;
  margin-bottom: 2rem;
  color: var(--color-text-muted);
  font-weight: 300;
  line-height: 1.6;

  p {
    font-size: 2rem;
  }

  p + p {
    margin-top: 2rem;
  }
`;
