import { PortableText } from '@portabletext/react';

import type { PAGE_QUERY_RESULT } from '@/sanity/sanity.types';

type PageContentProps = Pick<
  NonNullable<PAGE_QUERY_RESULT>,
  'heading' | 'body'
> & {
  className?: {
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
    <>
      <h1 className={className?.title}>{heading}</h1>

      <div className={className?.body}>
        <PortableText value={body} />
      </div>
    </>
  );
}
