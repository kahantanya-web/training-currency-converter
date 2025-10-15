import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  it('should render exchange rates update message', () => {
    render(<PageFooter />);
    
    expect(screen.getByText('Exchange rates are updated hourly')).toBeInTheDocument();
  });

  it('should render copyright notice', () => {
    render(<PageFooter />);
    
    expect(screen.getByText('© 2025 Godel Technologies. All rights reserved.')).toBeInTheDocument();
  });

  it('should render last updated time when timestamp is provided', () => {
    const timestamp = new Date('2025-10-15T12:00:00Z').getTime();
    render(<PageFooter lastUpdated={timestamp} />);
    
    expect(screen.getByText(/Last updated:/)).toBeInTheDocument();
  });

  it('should not render last updated time when timestamp is not provided', () => {
    render(<PageFooter />);
    
    expect(screen.queryByText(/Last updated:/)).not.toBeInTheDocument();
  });

  it('should have proper styling classes', () => {
    const { container } = render(<PageFooter />);
    
    const footer = container.firstChild;
    expect(footer).toHaveClass('text-center', 'mt-8', 'text-gray-600', 'text-sm');
  });

  it('should display copyright with proper spacing', () => {
    render(<PageFooter />);
    
    const copyright = screen.getByText('© 2025 Godel Technologies. All rights reserved.');
    expect(copyright).toHaveClass('mt-2');
  });
});
