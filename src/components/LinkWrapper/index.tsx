import type { ComponentProps } from 'react';
import Link from 'next/link';
import * as S from './styles';

export type LinkWrapperProps = ComponentProps<typeof Link>;

const LinkWrapper = ({ children, ...props }: LinkWrapperProps) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};

export default LinkWrapper;
