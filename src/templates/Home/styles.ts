import styled from 'styled-components';

export const Brand = styled.strong`
  position: fixed;
  z-index: 1000;
  top: var(--medium);
  left: 50%;
  transform: translateX(-50%);

  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
`;
