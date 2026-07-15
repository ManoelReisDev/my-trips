import { render, screen } from '@testing-library/react';

import PlaceTemplate from '.';
import type { PLACE_QUERY_RESULT } from '@/sanity/sanity.types';

jest.mock('@portabletext/react', () => ({
  PortableText: ({
    value,
  }: {
    value?: Array<{ children?: Array<{ text?: string }> }>;
  }) => (
    <div>
      {value?.map((block) =>
        block.children?.map((child) => <p key={child.text}>{child.text}</p>),
      )}
    </div>
  ),
}));

const place: NonNullable<PLACE_QUERY_RESULT> = {
  id: '1',
  name: 'São Luís',
  slug: 'sao-luis',
  description: [
    {
      _type: 'block',
      _key: 'block-1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span-1',
          text: 'Cidade histórica com rica cultura e arquitetura colonial.',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ],
  gallery: [
    {
      url: 'https://cdn.sanity.io/images/sao-luis.jpg',
      width: 800,
      height: 600,
    },
  ],
};

describe('PlaceTemplate', () => {
  it('renders the place name, description, and gallery images', () => {
    render(<PlaceTemplate place={place} />);

    // Check if the place name is rendered
    expect(
      screen.getByRole('heading', { name: 'São Luís' }),
    ).toBeInTheDocument();

    // Check if the place description is rendered
    expect(
      screen.getByText(
        'Cidade histórica com rica cultura e arquitetura colonial.',
      ),
    ).toBeInTheDocument();

    const image = screen.getByRole('img', { name: 'São Luís' });

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(
        encodeURIComponent('https://cdn.sanity.io/images/sao-luis.jpg'),
      ),
    );
  });
});
