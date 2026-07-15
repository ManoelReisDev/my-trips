import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -40rem 0;
  }

  100% {
    background-position: 40rem 0;
  }
`;

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem;
  aspect-ratio: 16 / 9;
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
`;

export const ImageFrame = styled.div`
  width: 100%;
  height: 100%;

  @keyframes imageFadeIn {
    from {
      opacity: 0;
      transform: scale(1.015);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: imageFadeIn 0.28s ease both;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      animation: none;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.4rem;
  height: 4.4rem;
  border: 0;
  border-radius: 50%;

  background: rgb(6 9 43 / 78%);
  color: var(--white);
  cursor: pointer;
  font-size: 3rem;
  line-height: 1;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgb(6 9 43 / 92%);
    transform: translateY(-50%) scale(1.04);
  }

  &:focus-visible {
    outline: 0.3rem solid var(--highlight);
    outline-offset: 0.3rem;
  }
`;

export const PreviousButton = styled(Button)`
  left: 1.6rem;
`;

export const NextButton = styled(Button)`
  right: 1.6rem;
`;

export const Counter = styled.p`
  position: absolute;
  right: 1.6rem;
  bottom: 1.6rem;

  padding: 0.6rem 1rem;
  border-radius: 999rem;

  background: rgb(6 9 43 / 78%);
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1;
`;
