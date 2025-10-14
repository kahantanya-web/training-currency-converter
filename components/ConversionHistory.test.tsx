import { render, screen, fireEvent } from '@testing-library/react';
import ConversionHistory from './ConversionHistory';
import { ConversionResult } from '@/types';

const mockConversions: ConversionResult[] = [
  {
    from: 'USD',
    to: 'EUR',
    amount: 100,
    result: 85,
    rate: 0.85,
    timestamp: new Date('2025-10-14T10:00:00').getTime(),
  },
  {
    from: 'GBP',
    to: 'JPY',
    amount: 50,
    result: 7534.25,
    rate: 150.685,
    timestamp: new Date('2025-10-14T11:00:00').getTime(),
  },
];

describe('ConversionHistory', () => {
  const defaultProps = {
    history: mockConversions,
    showHistory: true,
    onToggle: jest.fn(),
    onClear: jest.fn(),
    onLoadConversion: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component with heading', () => {
    render(<ConversionHistory {...defaultProps} />);
    
    expect(screen.getByText('Conversion History')).toBeInTheDocument();
  });

  describe('Toggle button', () => {
    it('should display "Hide" text when showHistory is true', () => {
      render(<ConversionHistory {...defaultProps} showHistory={true} />);
      
      expect(screen.getByText(/Hide/)).toBeInTheDocument();
    });

    it('should display "Show" text when showHistory is false', () => {
      render(<ConversionHistory {...defaultProps} showHistory={false} />);
      
      expect(screen.getByText(/Show/)).toBeInTheDocument();
    });

    it('should display history count in toggle button', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      expect(screen.getByText(/\(2\)/)).toBeInTheDocument();
    });

    it('should display zero count when history is empty', () => {
      render(<ConversionHistory {...defaultProps} history={[]} />);
      
      expect(screen.getByText(/\(0\)/)).toBeInTheDocument();
    });

    it('should call onToggle when toggle button is clicked', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      const toggleButton = screen.getByText(/Hide \(2\)/);
      fireEvent.click(toggleButton);
      
      expect(defaultProps.onToggle).toHaveBeenCalledTimes(1);
    });
  });

  describe('Clear button', () => {
    it('should display clear button when history has items', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      expect(screen.getByText('Clear History')).toBeInTheDocument();
    });

    it('should not display clear button when history is empty', () => {
      render(<ConversionHistory {...defaultProps} history={[]} />);
      
      expect(screen.queryByText('Clear History')).not.toBeInTheDocument();
    });

    it('should call onClear when clear button is clicked', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      const clearButton = screen.getByText('Clear History');
      fireEvent.click(clearButton);
      
      expect(defaultProps.onClear).toHaveBeenCalledTimes(1);
    });
  });

  describe('History display', () => {
    it('should show history list when showHistory is true', () => {
      render(<ConversionHistory {...defaultProps} showHistory={true} />);
      
      expect(screen.getByText((content, element) => {
        return element?.textContent === '100.00 USD → 85.00 EUR';
      })).toBeInTheDocument();
      expect(screen.getByText((content, element) => {
        return element?.textContent === '50.00 GBP → 7534.25 JPY';
      })).toBeInTheDocument();
    });

    it('should not show history list when showHistory is false', () => {
      render(<ConversionHistory {...defaultProps} showHistory={false} />);
      
      expect(screen.queryByText((content, element) => {
        return element?.textContent === '100.00 USD → 85.00 EUR';
      })).not.toBeInTheDocument();
      expect(screen.queryByText((content, element) => {
        return element?.textContent === '50.00 GBP → 7534.25 JPY';
      })).not.toBeInTheDocument();
    });

    it('should display empty state when history is empty and showHistory is true', () => {
      render(<ConversionHistory {...defaultProps} history={[]} showHistory={true} />);
      
      expect(screen.getByText('No conversion history yet')).toBeInTheDocument();
    });

    it('should not display empty state when showHistory is false', () => {
      render(<ConversionHistory {...defaultProps} history={[]} showHistory={false} />);
      
      expect(screen.queryByText('No conversion history yet')).not.toBeInTheDocument();
    });
  });

  describe('Conversion data rendering', () => {
    it('should display conversion amount and currencies', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      expect(screen.getByText((content, element) => {
        return element?.textContent === '100.00 USD → 85.00 EUR';
      })).toBeInTheDocument();
      expect(screen.getByText((content, element) => {
        return element?.textContent === '50.00 GBP → 7534.25 JPY';
      })).toBeInTheDocument();
    });

    it('should display exchange rate for each conversion', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      expect(screen.getByText(/Rate: 1 USD = 0.8500 EUR/)).toBeInTheDocument();
      expect(screen.getByText(/Rate: 1 GBP = 150.6850 JPY/)).toBeInTheDocument();
    });

    it('should display timestamp for each conversion', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      const timestamps = screen.getAllByText(/10\/14\/2025/);
      expect(timestamps.length).toBeGreaterThan(0);
    });

    it('should render multiple conversion items', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      const conversions = screen.getAllByText(/Rate: 1/);
      expect(conversions).toHaveLength(2);
    });
  });

  describe('Conversion item interaction', () => {
    it('should call onLoadConversion when a conversion item is clicked', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      const firstConversion = screen.getByText((content, element) => {
        return element?.textContent === '100.00 USD → 85.00 EUR';
      });
      fireEvent.click(firstConversion.closest('.cursor-pointer')!);
      
      expect(defaultProps.onLoadConversion).toHaveBeenCalledTimes(1);
      expect(defaultProps.onLoadConversion).toHaveBeenCalledWith(mockConversions[0]);
    });

    it('should call onLoadConversion with correct conversion data', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      const secondConversion = screen.getByText((content, element) => {
        return element?.textContent === '50.00 GBP → 7534.25 JPY';
      });
      fireEvent.click(secondConversion.closest('.cursor-pointer')!);
      
      expect(defaultProps.onLoadConversion).toHaveBeenCalledWith(mockConversions[1]);
    });

    it('should handle multiple clicks on different conversions', () => {
      render(<ConversionHistory {...defaultProps} />);
      
      const firstConversion = screen.getByText((content, element) => {
        return element?.textContent === '100.00 USD → 85.00 EUR';
      });
      const secondConversion = screen.getByText((content, element) => {
        return element?.textContent === '50.00 GBP → 7534.25 JPY';
      });
      
      fireEvent.click(firstConversion.closest('.cursor-pointer')!);
      fireEvent.click(secondConversion.closest('.cursor-pointer')!);
      
      expect(defaultProps.onLoadConversion).toHaveBeenCalledTimes(2);
      expect(defaultProps.onLoadConversion).toHaveBeenNthCalledWith(1, mockConversions[0]);
      expect(defaultProps.onLoadConversion).toHaveBeenNthCalledWith(2, mockConversions[1]);
    });
  });

  describe('Edge cases', () => {
    it('should handle single item in history', () => {
      const singleItem = [mockConversions[0]];
      render(<ConversionHistory {...defaultProps} history={singleItem} />);

      expect(screen.getByText(/\(1\)/)).toBeInTheDocument();
      expect(screen.getByText((content, element) => {
        return element?.textContent === '100.00 USD → 85.00 EUR';
      })).toBeInTheDocument();
      expect(screen.queryByText((content, element) => {
        return element?.textContent === '50.00 GBP → 7534.25 JPY';
      })).not.toBeInTheDocument();
    });

    it('should handle large numbers correctly', () => {
      const largeConversion: ConversionResult[] = [
        {
          from: 'USD',
          to: 'JPY',
          amount: 10000,
          result: 1500000,
          rate: 150,
          timestamp: Date.now(),
        },
      ];
      render(<ConversionHistory {...defaultProps} history={largeConversion} />);
      
      expect(screen.getByText((content, element) => {
        return element?.textContent === '10000.00 USD → 1500000.00 JPY';
      })).toBeInTheDocument();
      expect(screen.getByText(/Rate: 1 USD = 150.0000 JPY/)).toBeInTheDocument();
    });    it('should handle decimal amounts correctly', () => {
      const decimalConversion: ConversionResult[] = [
        {
          from: 'EUR',
          to: 'USD',
          amount: 99.99,
          result: 117.64,
          rate: 1.1765,
          timestamp: Date.now(),
        },
      ];
      render(<ConversionHistory {...defaultProps} history={decimalConversion} />);
      
      expect(screen.getByText(/99.99 EUR → 117.64 USD/)).toBeInTheDocument();
      expect(screen.getByText(/Rate: 1 EUR = 1.1765 USD/)).toBeInTheDocument();
    });
  });
});
