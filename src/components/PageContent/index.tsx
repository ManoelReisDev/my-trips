import type { ReactNode } from 'react';
import { PortableText } from '@portabletext/react';

import type { PAGE_QUERY_RESULT } from '@/sanity/sanity.types';
import * as S from './styles';

type PageContentProps = Pick<
  NonNullable<PAGE_QUERY_RESULT>,
  'heading' | 'body'
> & {
  linkWrapper?: ReactNode;
  className?: {
    wrapper?: string;
    container?: string;
    title?: string;
    body?: string;
  };
};

export default function PageContent({
  heading,
  body,
  linkWrapper,
  className,
}: PageContentProps) {
  return (
    <S.Wrapper className={className?.wrapper}>
      {linkWrapper}

      <S.Container className={className?.container}>
        <S.Title className={className?.title}>{heading}</S.Title>

        <S.Body className={className?.body}>
          <PortableText value={body} />
        </S.Body>
      </S.Container>
    </S.Wrapper>
  );
}
