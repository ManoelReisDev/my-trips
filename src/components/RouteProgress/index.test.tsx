import { render, screen } from '@testing-library/react';

import RouteProgress from '.';

jest.mock('nextjs-toploader', () => ({
  __esModule: true,
  default: ({
    color,
    height,
    showSpinner,
  }: {
    color: string;
    height: number;
    showSpinner: boolean;
  }) => (
    <div
      data-testid="route-progress"
      data-color={color}
      data-height={height}
      data-show-spinner={String(showSpinner)}
    />
  ),
}));

describe('<RouteProgress />', () => {
  it('renders the top loader with the project theme settings', () => {
    render(<RouteProgress />);

    expect(screen.getByTestId('route-progress')).toHaveAttribute(
      'data-color',
      '#f97316',
    );

    expect(screen.getByTestId('route-progress')).toHaveAttribute(
      'data-height',
      '3',
    );

    expect(screen.getByTestId('route-progress')).toHaveAttribute(
      'data-show-spinner',
      'false',
    );
  });
});
