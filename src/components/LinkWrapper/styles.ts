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

  width: 4.4rem;
  height: 4.4rem;
  padding: 0;
  border-radius: 0.4rem;

  border: 0.1rem solid var(--color-border);

  background: var(--color-surface);
  color: var(--color-primary);
  box-shadow: 0 0.2rem 0.8rem var(--color-shadow);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-0.2rem);
    color: var(--color-primary-hover);
    box-shadow: 0 0.4rem 1.2rem var(--color-shadow);
  }

  &:focus-visible {
    outline: 0.3rem solid var(--color-primary);
    outline-offset: 0.3rem;
  }
`;
