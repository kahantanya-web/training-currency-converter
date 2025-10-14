import { render, screen, fireEvent } from '@testing-library/react';
import RefreshButton from './RefreshButton';

describe('RefreshButton', () => {
  it('renders refresh button with correct attributes', () => {
    const mockOnClick = jest.fn();
    render(<RefreshButton onClick={mockOnClick} />);
    
    const button = screen.getByRole('button', { name: /refresh exchange rates/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('title', 'Refresh exchange rates');
    expect(button).toHaveAttribute('aria-label', 'Refresh exchange rates');
  });

  it('calls onClick when button is clicked', () => {
    const mockOnClick = jest.fn();
    render(<RefreshButton onClick={mockOnClick} />);
    
    const button = screen.getByRole('button', { name: /refresh exchange rates/i });
    fireEvent.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when loading is true', () => {
    const mockOnClick = jest.fn();
    render(<RefreshButton onClick={mockOnClick} loading={true} />);
    
    const button = screen.getByRole('button', { name: /refresh exchange rates/i });
    expect(button).toBeDisabled();
  });

  it('does not call onClick when button is disabled', () => {
    const mockOnClick = jest.fn();
    render(<RefreshButton onClick={mockOnClick} loading={true} />);
    
    const button = screen.getByRole('button', { name: /refresh exchange rates/i });
    fireEvent.click(button);
    
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('applies spinning animation when loading', () => {
    const mockOnClick = jest.fn();
    render(<RefreshButton onClick={mockOnClick} loading={true} />);
    
    const svg = screen.getByRole('button').querySelector('svg');
    expect(svg).toHaveClass('animate-spin');
  });

  it('does not apply spinning animation when not loading', () => {
    const mockOnClick = jest.fn();
    render(<RefreshButton onClick={mockOnClick} loading={false} />);
    
    const svg = screen.getByRole('button').querySelector('svg');
    expect(svg).not.toHaveClass('animate-spin');
  });

  it('enables button when loading is false', () => {
    const mockOnClick = jest.fn();
    render(<RefreshButton onClick={mockOnClick} loading={false} />);
    
    const button = screen.getByRole('button', { name: /refresh exchange rates/i });
    expect(button).not.toBeDisabled();
  });
});
