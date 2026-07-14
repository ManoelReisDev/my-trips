import { render, screen } from '@testing-library/react';

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

const page = {
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
  });

  it('applies custom class names', () => {
    render(
      <PageContent
        heading={page.heading}
        body={page.body}
        className={{
          title: 'custom-title',
          body: 'custom-body',
        }}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Sobre o My Trips' }),
    ).toHaveClass('custom-title');

    expect(
      screen.getByText('Conteúdo vindo do Sanity.').closest('.custom-body'),
    ).toBeInTheDocument();
  });
});
