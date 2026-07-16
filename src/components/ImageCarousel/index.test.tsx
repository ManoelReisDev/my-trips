import { fireEvent, render, screen } from '@testing-library/react';

import ImageCarousel, { type CarouselImage } from '.';

const images: CarouselImage[] = [
  {
    url: 'https://cdn.sanity.io/images/sao-luis-1.jpg',
    width: 800,
    height: 600,
  },
  {
    url: 'https://cdn.sanity.io/images/sao-luis-2.jpg',
    width: 800,
    height: 600,
  },
];

describe('<ImageCarousel />', () => {
  it('renders the first image and the current position', () => {
    render(<ImageCarousel images={images} alt="São Luís" />);

    expect(screen.getByRole('img', { name: 'São Luís 1' })).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(images[0].url)),
    );
    expect(screen.getByText('1 / 2')).toBeInTheDocument();
  });

  it('navigates between images', () => {
    render(<ImageCarousel images={images} alt="São Luís" />);

    fireEvent.click(screen.getByRole('button', { name: 'Próxima imagem' }));

    expect(screen.getByRole('img', { name: 'São Luís 2' })).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(images[1].url)),
    );
    expect(screen.getByText('2 / 2')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Imagem anterior' }));

    expect(screen.getByRole('img', { name: 'São Luís 1' })).toBeInTheDocument();
    expect(screen.getByText('1 / 2')).toBeInTheDocument();
  });

  it('wraps around when navigating past the ends', () => {
    render(<ImageCarousel images={images} alt="São Luís" />);

    fireEvent.click(screen.getByRole('button', { name: 'Imagem anterior' }));

    expect(screen.getByRole('img', { name: 'São Luís 2' })).toBeInTheDocument();
    expect(screen.getByText('2 / 2')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Próxima imagem' }));

    expect(screen.getByRole('img', { name: 'São Luís 1' })).toBeInTheDocument();
    expect(screen.getByText('1 / 2')).toBeInTheDocument();
  });

  it('hides controls when there is only one image', () => {
    render(<ImageCarousel images={[images[0]]} alt="São Luís" />);

    expect(
      screen.queryByRole('button', { name: 'Imagem anterior' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Próxima imagem' }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('1 / 1')).not.toBeInTheDocument();
  });
});
