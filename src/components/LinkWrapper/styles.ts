import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  position: fixed;
  z-index: 1000;
  top: var(--medium);
  right: var(--medium);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 1.5rem;
  border-radius: 0.4rem;

  background: var(--white);
  color: var(--highlight);
  box-shadow: 0 0.2rem 0.8rem rgb(0 0 0 / 20%);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.4rem 1.2rem rgb(0 0 0 / 30%);
  }

  &:focus-visible {
    outline: 0.3rem solid var(--highlight);
    outline-offset: 0.3rem;
  }
`;
