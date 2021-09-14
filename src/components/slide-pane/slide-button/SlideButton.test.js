import { render, screen } from '@testing-library/react';
import { SlideButton, Direction } from './SlideButton';

describe('Slide button component', () => {
  test('renders slide arrow button in document', () => {
    render(<SlideButton direction={Direction.left} />);
    const slideButton = screen.getByTestId('slide-button');

    expect(slideButton).toBeInTheDocument();
  });
});
