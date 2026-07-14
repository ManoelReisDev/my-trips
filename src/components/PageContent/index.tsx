import { PortableText } from '@portabletext/react';

import type { ContentPage } from '@/sanity/types';

type PageContentProps = Pick<ContentPage, 'heading' | 'body'> & {
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
