import { render, screen } from '@testing-library/react';
import LinkWrapper from './';

describe('LinkWrapper', () => {
  it('renders a link to the about page', () => {
    render(<LinkWrapper href="/sobre">Sobre</LinkWrapper>);

    const link = screen.getByRole('link', { name: 'Sobre' });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/sobre');
  });

  it('stays visable over the map', () => {
    render(<LinkWrapper href="/sobre">Sobre</LinkWrapper>);

    const link = screen.getByRole('link', { name: 'Sobre' });

    expect(link).toHaveStyleRule('position', 'fixed');
    expect(link).toHaveStyleRule('z-index', '1000');
    expect(link).toHaveStyleRule('top', 'var(--medium)');
    expect(link).toHaveStyleRule('right', 'var(--medium)');
  });
});
