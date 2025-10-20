import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  it('should render copyright notice', () => {
    render(<PageFooter />);
    
    expect(screen.getByText('© 2025 Godel Technologies. All rights reserved.')).toBeInTheDocument();
  });

  it('should render exchange rate update message', () => {
    render(<PageFooter />);
    
    expect(screen.getByText('Exchange rates are updated hourly')).toBeInTheDocument();
  });

  it('should render last updated timestamp when provided', () => {
    const timestamp = new Date('2025-01-15T12:00:00').getTime();
    render(<PageFooter lastUpdated={timestamp} />);
    
    expect(screen.getByText(/Last updated:/)).toBeInTheDocument();
  });

  it('should not render last updated when timestamp is not provided', () => {
    render(<PageFooter />);
    
    expect(screen.queryByText(/Last updated:/)).not.toBeInTheDocument();
  });
});
