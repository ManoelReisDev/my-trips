import { render, screen } from '@testing-library/react';

import HomeTemplate from '.';
import type { Place } from '@/components/Map';

jest.mock('@/components/Map', () => ({
  __esModule: true,
  default: ({ places = [] }: { places?: Place[] }) => (
    <div data-testid="map">{places.map((place) => place.name).join(', ')}</div>
  ),
}));

const places: Place[] = [
  {
    id: '1',
    name: 'Petrópolis',
    slug: 'petropolis',
    location: {
      latitude: -22.5112,
      longitude: -43.1779,
    },
  },
];

describe('<HomeTemplate />', () => {
  it('renders the map with places and the about link', () => {
    render(<HomeTemplate places={places} />);

    expect(screen.getByTestId('map')).toHaveTextContent('Petrópolis');
    expect(screen.getByRole('link', { name: 'Sobre' })).toHaveAttribute(
      'href',
      '/sobre',
    );
  });
});
