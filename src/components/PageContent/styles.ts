import styled from 'styled-components';

export const Wrapper = styled.section`
  text-align: center;
`;

export const Container = styled.article`
  width: 100%;
`;

export const Title = styled.h1`
  margin-top: 10rem;
  margin-bottom: 4rem;
  color: var(--color-text);
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 600;
  line-height: 1;
`;

export const Body = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  color: var(--color-text-muted);
  font-weight: 400;

  p {
    font-size: 2rem;
    line-height: 1.6;
    text-align: justify;
  }

  p + p {
    margin-top: 1.6rem;
  }

  @media (max-width: 768px) {
    padding: 0 2.5rem;

    p {
      font-size: 2rem;
    }
  }
`;
