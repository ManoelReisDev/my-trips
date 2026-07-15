import styled, { keyframes } from 'styled-components';

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

const shimmer = keyframes`
  0% {
    background-position: -40rem 0;
  }

  100% {
    background-position: 40rem 0;
  }
`;

export const GalleryImage = styled.div`
  overflow: hidden;
  border-radius: 0.4rem;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 100%;
  animation: ${shimmer} 1s linear infinite;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
