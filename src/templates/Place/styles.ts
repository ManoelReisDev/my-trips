import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  padding: 8rem 2rem;
  background: var(--background);
  color: var(--white);
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
  font-weight: 300;
  line-height: 1.6;

  p {
    font-size: 2rem;
  }

  p + p {
    margin-top: 2rem;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--medium);
`;

export const GalleryImage = styled.div`
  overflow: hidden;
  border-radius: 0.4rem;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
