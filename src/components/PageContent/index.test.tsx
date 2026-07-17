import { render, screen } from '@testing-library/react';
import type { PAGE_QUERY_RESULT } from '@/sanity/sanity.types';

jest.mock('@portabletext/react', () => ({
  PortableText: ({
    value,
  }: {
    value: Array<{ children?: Array<{ text: string }> }>;
  }) => (
    <div>
      {value.map((block) =>
        block.children?.map((child) => <p key={child.text}>{child.text}</p>),
      )}
    </div>
  ),
}));

import PageContent from '.';
import LinkWrapper from '@/components/LinkWrapper';

const page: Pick<NonNullable<PAGE_QUERY_RESULT>, 'heading' | 'body'> = {
  heading: 'Sobre o My Trips',
  body: [
    {
      _type: 'block',
      _key: 'block-1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Conteúdo vindo do Sanity.',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ],
};

describe('<PageContent />', () => {
  it('renders the page heading and body', () => {
    render(<PageContent heading={page.heading} body={page.body} />);

    expect(
      screen.getByRole('heading', { name: 'Sobre o My Trips' }),
    ).toBeInTheDocument();

    expect(screen.getByText('Conteúdo vindo do Sanity.')).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'Voltar ao mapa' }),
    ).not.toBeInTheDocument();
  });

  it('renders a custom link wrapper', () => {
    render(
      <PageContent
        heading={page.heading}
        body={page.body}
        linkWrapper={<LinkWrapper href="/">Voltar ao mapa</LinkWrapper>}
      />,
    );

    expect(
      screen.getByRole('link', { name: 'Voltar ao mapa' }),
    ).toHaveAttribute('href', '/');
  });

  it('applies custom class names', () => {
    render(
      <PageContent
        heading={page.heading}
        body={page.body}
        className={{
          wrapper: 'custom-wrapper',
          container: 'custom-container',
          title: 'custom-title',
          body: 'custom-body',
        }}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Sobre o My Trips' }),
    ).toHaveClass('custom-title');

    expect(
      screen
        .getByRole('heading', { name: 'Sobre o My Trips' })
        .closest('.custom-wrapper'),
    ).toBeInTheDocument();

    expect(
      screen
        .getByRole('heading', { name: 'Sobre o My Trips' })
        .closest('.custom-container'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Conteúdo vindo do Sanity.').closest('.custom-body'),
    ).toBeInTheDocument();
  });
});
