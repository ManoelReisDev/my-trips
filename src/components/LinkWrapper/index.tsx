import type { ReactNode } from 'react';
import * as S from './styles';

export type LinkWrapperProps = {
  href: string;
  children: ReactNode;
};

const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return <S.Wrapper href={href}>{children}</S.Wrapper>;
};

export default LinkWrapper;
