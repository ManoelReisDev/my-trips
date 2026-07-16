import { PortableText } from '@portabletext/react';

import LinkWrapper from '@/components/LinkWrapper';
import type { PAGE_QUERY_RESULT } from '@/sanity/sanity.types';
import * as S from './styles';

type PageContentProps = Pick<
  NonNullable<PAGE_QUERY_RESULT>,
  'heading' | 'body'
> & {
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
  className,
}: PageContentProps) {
  return (
    <S.Wrapper className={className?.wrapper}>
      <LinkWrapper href="/">Voltar ao mapa</LinkWrapper>

      <S.Container className={className?.container}>
        <S.Title className={className?.title}>{heading}</S.Title>

        <S.Body className={className?.body}>
          <PortableText value={body} />
        </S.Body>
      </S.Container>
    </S.Wrapper>
  );
}
