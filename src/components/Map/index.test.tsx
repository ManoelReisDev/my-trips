import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import ClientMap from './client-map';

jest.mock('leaflet', () => ({
  Icon: jest.fn(() => ({})),
}));

jest.mock('react-leaflet', () => ({
  MapContainer: ({
    center,
    children,
  }: {
    center: [number, number];
    children: ReactNode;
  }) => (
    <div data-testid="map" data-center={center.join(',')}>
      {children}
    </div>
  ),
  TileLayer: () => <div data-testid="tile-layer" />,
  Marker: ({
    position,
    children,
  }: {
    position: [number, number];
    children: ReactNode;
  }) => (
    <div data-testid="marker" data-position={position.join(',')}>
      {children}
    </div>
  ),
  Popup: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

const place = {
  id: '1',
  name: 'Petrópolis',
  slug: 'petropolis',
  location: {
    latitude: -22.5112,
    longitude: -43.1779,
  },
};

const place2 = {
  id: '2',
  name: 'São Luís',
  slug: 'São Luís',
  location: {
    latitude: -2.5307,
    longitude: -44.3068,
  },
};

// Testing the ClientMap component
describe('ClientMap', () => {
  it('renders without markers when places is empty', () => {
    render(<ClientMap />);

    expect(screen.getByTestId('map')).toBeInTheDocument();
    expect(screen.queryByTestId('marker')).not.toBeInTheDocument();
  });

  it('centers the map on the first place', () => {
    render(<ClientMap places={[place, place2]} />);

    expect(screen.getByTestId('map')).toHaveAttribute(
      'data-center',
      '-22.5112,-43.1779',
    );
  });

  it('renders a marker with the place coordinates and name', () => {
    render(<ClientMap places={[place]} />);

    expect(screen.getByTestId('marker')).toHaveAttribute(
      'data-position',
      '-22.5112,-43.1779',
    );
    expect(screen.getByText('Petrópolis')).toBeInTheDocument();
  });

  it('renders one marker for each place', () => {
    render(<ClientMap places={[place, place2]} />);

    const markers = screen.getAllByTestId('marker');

    expect(markers).toHaveLength(2);
    expect(markers[0]).toHaveAttribute('data-position', '-22.5112,-43.1779');
    expect(markers[1]).toHaveAttribute('data-position', '-2.5307,-44.3068');
    expect(screen.getByText('Petrópolis')).toBeInTheDocument();
    expect(screen.getByText('São Luís')).toBeInTheDocument();
  });
});
