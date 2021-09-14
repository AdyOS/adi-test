import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from './SearchInput';

describe('Search Input component', () => {
  const onSearch = jest.fn();
  const onChangeInput = jest.fn();

  test('renders search input component react link', () => {
    render(<SearchInput onSearch={onSearch} onChangeSearch={onChangeInput} />);
    const searchComponent = screen.getByTestId('search-input');

    expect(searchComponent).toBeInTheDocument();
  });

  test('call onSearch handler if Enter key pressed', () => {
    render(<SearchInput onSearch={onSearch} onChangeSearch={onChangeInput} />);
    const searchComponent = screen.getByTestId('search-input');

    fireEvent.keyDown(searchComponent, { key: 'Enter', code: 'Enter' });

    expect(onSearch).toBeCalled();
  });

  test('check onChangeInput called with value', () => {
    render(<SearchInput onSearch={onSearch} onChangeSearch={onChangeInput} />);
    const searchComponent = screen.getByTestId('search-input');

    fireEvent.change(searchComponent, { target: { value: 'test' } });
    expect(onChangeInput).toHaveBeenCalledWith('test');
  });

  test('should fire search event when search icon clicked', () => {
    render(<SearchInput onSearch={onSearch} onChangeSearch={onChangeInput} />);
    const searchIcon = screen.getByTestId('search-icon');

    fireEvent.click(searchIcon);
    expect(onSearch).toBeCalled();
  });
});
